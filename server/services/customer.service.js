"use strict"

const mongoose = require('mongoose'),
    q = require('q'),
    config = require('../config.json'),
    customer = require('../models/customer.model');

let uri = config.connectionStrings.customer;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uri + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uri);
    }
});

let service = {};

// service.getById = getById;
// service.update = update;

module.exports = service;