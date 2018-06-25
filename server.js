"use strict";
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.end('this is the index of the server');
});

server.listen(3000, () => console.log('the server is up and running'));