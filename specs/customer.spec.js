"use strict"

const expect = require("chai").expect,
    assert = require("chai").assert,
    config = require("../server/config.json"),
    mongoose = require("mongoose"),
    customerService = require("../server/services/customer.service"),
    customer = require("../server/models/customer.model.js");

let uri = config.connectionStrings.cms;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log("ERROR connecting to: " + uri + ". " + err);
    } else {
        console.log("Succeeded connected to: " + uri);
    }
});

describe("customer service", () => {
    it.skip("should return the next index", (done) => {
        customer.findOne().sort("-id").limit(1).exec((error, response) => {
            let customer = response;
            assert.equal(customer.id + 1, 6);
            done();
        });
    });

    it.skip("should return a customer by id", (done) => {
        customerService.getById(1)
            .then((response) => {
                assert.isNotNull(response);
                done();
            });
    });

    it.skip("should return a list of customers", (done) => {
        customerService.getAllCustomers()
            .then((response) => {
                assert.isAtLeast(response.length, 1);
                done();
            });
    });

    it.skip("should create a customer", (done) => {

        let newCustomer = new customer({
            firstName: "Vu",
            lastName: "Nguyen",
            address: "123 Drive Dr.",
            phoneNumber: "123-123-1234",
            email: "testtest.com"
        });

        customerService.createCustomer(newCustomer)
            .then((data) => {
                assert.isNotNull(data.id);
                done();
            });
    });

    it.skip("should update a customer", (done) => {
        let req = {
            "body": {
                "id": 5,
                "customer": {
                    firstName: "234",
                    lastName: "adsf",
                    address: "234 Drive Dr.",
                    phoneNumber: "123-123-1234",
                    email: "asdf@asdf.com"
                }
            }
        };

        customerService.updateById(req.body.id, req.body)
            .then((data) => {
                assert.equal(5, data.id);
                done();
            });
    });

    it.skip("should delete a customer", (done) => {
        let req = {
            "body": {
                "customer": {
                    "id": 5
                }
            }
        };

        customerService.removeCustomer(req.body)
            .then((data) => {
                assert.equal(5, data.id);
                done();
            });
    });
});