const express = require('express');
const model = require('../Model/model');
const router = express.Router();
const { fetchAndStoreData, getData } = require('../Utils/fetchAndStoreData');

// Fetch and store data initially
fetchAndStoreData();

// Get users with filtering and sorting
const getUsers = async (req, res) => {
    const { sort, filter } = req.query;
    let data = getData();

    // Filtering
    if (filter) {
        const [filterKey, filterValue] = filter.split(':');
        data = data.filter(item =>
            item[filterKey] && item[filterKey].toString().toLowerCase().includes(filterValue.toLowerCase())
        );
    }

    // Sorting
    if (sort) {
        const [key, order] = sort.split(':');
        
        // Ensure the key is valid and exists in the data
        if (key && (order === 'asc' || order === 'desc')) {
            data = data.sort((a, b) => {
                // Ensure both items have the key and handle undefined values
                const aValue = a[key] || '';
                const bValue = b[key] || '';
    
                // Compare values for sorting
                if (aValue < bValue) return order === 'asc' ? -1 : 1;
                if (aValue > bValue) return order === 'asc' ? 1 : -1;
                return 0;
            });
        }
    }
    

    // Return the count and the data
    res.json({
        count: data.length,
        data: data
    });
};

// Get user by custom ID field
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = getData().find(user => user.id === userId);

        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err.message || 'Internal Server Error');
    }
};



// Register a new user
const registerUser = async (req, res) => {
    try {
        const userExists = await model.findOne({ id: req.body.id });
        if (userExists) {
            return res.status(400).send("User already exists");
        }
        const user = new model(req.body);
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update user by custom ID field
const updateUserById = async (req, res) => {
    try {
        const user = await model.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete user by custom ID field
const deleteUserById = async (req, res) => {
    try {
        const user = await model.findOneAndDelete({ id: req.params.id });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Routes
router.get('/get', getUsers);
router.get('/get/:id', getUserById);
router.post('/post', registerUser);
router.put('/update/:id', updateUserById);
router.delete('/delete/:id', deleteUserById);

module.exports = router;
