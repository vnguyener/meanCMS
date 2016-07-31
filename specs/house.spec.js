"use strict"

const expect = require("chai").expect,
    assert = require("chai").assert,
    config = require("../server/config.json"),
    mongoose = require("mongoose"),
    houseService = require("../server/services/house.service"),
    house = require("../server/models/house.model.js");

let uri = config.connectionStrings.cms;

mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log("ERROR connecting to: " + uri + ". " + err);
    } else {
        console.log("Succeeded connected to: " + uri);
    }
});

describe("house service", () => {
    it.skip("should return the next index", (done) => {
        house.findOne().sort("-homeID").limit(1).exec((error, house) => {
            let response = house;
            assert.equal(house.homeID + 1, 7);
            done();
        });
    });

    it.skip("should get house obj by customerid", (done) => {

        let customerID = 1;

        houseService.getHouseByCustomerId(customerID)
            .then((response) => {
                assert.isNotNull(response);
                assert.equal(response.customerID, customerID);
                console.log('customerID ' + customerID + ' should equal ' + response.customerID)
                done();
            });
    });

    it.skip("should get rooms array by houseid", (done) => {

        let houseID = 1;

        houseService.getRoomsByHouseId(houseID)
            .then((response) => {
                assert.isArray(response);
                console.log('rooms array.length is ' + response.length);
                done();
            });
    });

    it("should insert new house obj with a room", (done) => {

        let req = {
            customerId: 2332,
            homeInfo: {
                totalSize: 1200,
                numStories: 2,
                numBedrooms: 2,
                numBathrooms: 2,
                acType: 'Central',
                heatingType: 'Gas',
                installationDate: new Date(2001, 1, 3)
            },
            roomsInfo: [
                {
                    alias: 'asdf',
                    homeID: 32433,
                    size: 200,
                    numWindows: 2,
                    numStory: 1
                },
                {
                    alias: '123',
                    homeID: 32433,
                    size: 200,
                    numWindows: 2,
                    numStory: 1
                }
            ]
        };

        houseService.createNewHouse(req)
            .then((data) => {
                assert.isString(data.message);
                console.log(data.message);
                done();
            });
    });
});