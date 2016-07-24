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
    it("should return the next index", (done) => {
        customer.findOne().sort("-id").limit(1).exec((error, response) => {
            let customer = response;
            assert.equal(customer.id + 1, 6);
            done();
        });
    });

    it("should return a customer by id", (done) => {
        customerService.getById(1)
            .then((response) => {
                assert.isNotNull(response);
                done();
            });
    });

    it("should return a list of customers", (done) => {
        customerService.getAllCustomers()
            .then((response) => {
                assert.isAtLeast(response.length, 1);
                done();
            });
    });

    it.skip("should create a customer", (done) => {

        let newCustomer = new customer({
            id: 3453,
            firstName: "TestFirst",
            lastName: "TestLast",
            address: "123 Test Rd.",
            phoneNumbeR: "123-234-3454",
            email: "test@test.com"
        });

        customerService.createCustomer(newCustomer)
            .then((data) => {
                assert.isNotNull(data.id);
                done();
            });
    });
});