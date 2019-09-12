// Libraries
const express = require('express');

// Files
const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;