"use strict"

const mongoose = require('mongoose'),
    q = require('q'),
    config = require('../../config.json'),
    user = require('../../models/user.model');

let uri = process.env.MONGOLAB_URI || config.user;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});

let service = {};

service.authenticate = authenticate;
// service.getById = getById;
// service.update = update;

module.exports = service;

function authenticate(email, password) {
    let deferred = q.defer();

    user.findOne({ 'email': name, 'password': password }, query, function (error, user) {
        if (error) {
            console.log(error);
        }
        else {
            query.split(' ').forEach(function (query) {
                object[query] = user[query];
            });
            console.log(object);
        }

        return object;
    });
}