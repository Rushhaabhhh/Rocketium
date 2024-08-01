const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    version: { type: String, 
        default: 'default_version' 
    },
    bio: { 
        type: String, 
        default: 'default_bio' 
    },
    langauge: { 
        type: String, 
        default: 'default_langauge' 
    },
    name: { 
        type: String, 
        default: 'default_name' 
    },
    id: { type: String, 
        default: 'default_id' 
    },
});

module.exports = mongoose.model('Data', DataSchema);
