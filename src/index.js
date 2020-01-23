'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(require('./routes'));

module.exports = app;
