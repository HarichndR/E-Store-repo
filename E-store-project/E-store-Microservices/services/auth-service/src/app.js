const express = require("express");
const app = express();
const logger = require('./utils/logger.js')
const { Async_Handler } = require('./utils/error.handler.js');
app.use(express.json());
app.get('/', Async_Handler((req, res) => {
    // info(message, data = null)
    logger.info('successful request to Auth service')
    res.status(201).send('Auth Service is up and running');
}));

module.exports = app;