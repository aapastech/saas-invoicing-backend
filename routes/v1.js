const express = require('express');
const routerV1 = express.Router();
const usersRouter = require('./users');
const uploadFileRouter = require('./uploadFile');

routerV1.use('/user', usersRouter);
routerV1.use('/upload', uploadFileRouter);

module.exports = routerV1;
