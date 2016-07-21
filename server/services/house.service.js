"use strict"

const mongoose = require('mongoose'),
    q = require('q'),
    config = require('../config.json'),
    house = require('../models/house.model'),
    room = require('../models/room.model');

let uri = config.connectionStrings.cms;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uri + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uri);
    }
});

let service = {};

service.add = addHouse;
service.getById = getHouseDetailsById;
service.update = updateHouseDetailsById;

module.exports = service;

function addHouse() {

}

function getHouseDetailsById(id) {
    let deferred = q.defer();
    
    house.findOne({'id': id}, (error, details) => {
        if (error) {
            deferred.reject(error);
        }
        else if (details) {
            deferred.resolve(details);
        }
        else {
            deferred.reject({message: 'Internal Server Error'});
        }
    });

    return deferred.promise;
}

function updateHouseDetailsById() {

}