"use strict"

const expect = require('chai').expect,
    assert = require('chai').assert,
    config = require('../server/config.json'),
    mongoose = require('mongoose'),
    customerService = require('../server/services/customer.service'),
    customer = require('../server/models/customer.model.js');

let uri = config.connectionStrings.cms;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uri + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uri);
    }
});

describe("customer service", () => {
    it("should return the next index", (done) => {

        customer.findOne().sort('-id').limit(1).exec((error, customer) => {
            let response = customer;
            assert.equal(customer.id + 1, 3);
            done();
        });

    });
});