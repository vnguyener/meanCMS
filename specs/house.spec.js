"use strict"

const expect = require('chai').expect,
    assert = require('chai').assert,
    config = require('../server/config.json'),
    mongoose = require('mongoose'),
    houseService = require('../server/services/house.service'),
    house = require('../server/models/house.model.js');

let uri = config.connectionStrings.cms;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uri + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uri);
    }
});

describe("house service", () => {
    it("should return the next index", (done) => {

        house.findOne().sort('-homeID').limit(1).exec((error, house) => {
            let response = house;
            assert.equal(house.homeID + 1, 3);
            done();
        });

    });
});