const fs = require('fs');
const path = require('path');
const axios = require('axios');

const filePath = path.join(__dirname,'data.json');
const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

const fetchAndStoreData = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Data fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getData = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

module.exports = { fetchAndStoreData, getData };
