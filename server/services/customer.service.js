"use strict"

const mongoose = require('mongoose'),
    q = require('q'),
    config = require('../../config.json'),
    customer = require('../../models/customer.customer');

let uri = process.env.MONGOLAB_URI || config;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});

let service = {};

service. = authenticate;
// service.getById = getById;
// service.update = update;

module.exports = service;