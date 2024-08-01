const express = require('express');
const cors = require('cors');
const http = require('http');

const parser = require('body-parser');
const routes = require('./Routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(parser.json());
app.use('/api/', routes);

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
