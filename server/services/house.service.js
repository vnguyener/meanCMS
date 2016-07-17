"use strict"

const mongoose = require('mongoose'),
    q = require('q'),
    config = require('../../config.json'),
    house = require('../../models/house.model'),
    room = require('../../models/room.model');

let uri = process.env.MONGOLAB_URI || config.house;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});

let service = {};

service.add = addHouse;
service.getById = getHouseById;
service.update = updateHouseDetailsById;

module.exports = service;

function addHouse() {

}

function getHouseDetailsById() {

}

function updateHouseDetailsById() {

}