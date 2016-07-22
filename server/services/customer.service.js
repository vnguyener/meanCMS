"use strict"

const mongoose = require('mongoose'),
    q = require('q'),
    config = require('../config.json'),
    customer = require('../models/customer.model');

let uri = config.connectionStrings.cms;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uri + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uri);
    }
});

let service = {};

service.getById = getById;
service.getAllCustomers = getAllCustomers;

module.exports = service;

function getById(id) {
    let deferred = q.defer();

    customer.findOne({'id': id}, (error, customer) => {
        if(error) {
            console.log(error);
            deferred.reject(error);
        }
        else if (customer) {
            deferred.resolve(customer);
        }
        else {
            deferred.reject({message: 'Internal Server Error'});
        }
    });

    return deferred.promise;
}

function getAllCustomers() {
    let deferred = q.defer();

    customer.find({}, (error, customers) => {
        if (error){
            console.log(error);
            deferred.reject(error);
        }
        else if (customers) {
            deferred.resolve(customers);
        }
    });

    return deferred.promise;
}