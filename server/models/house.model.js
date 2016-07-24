"use strict"

const mongoose = require("mongoose");

module.exports = mongoose.model("House", {
    homeID: {type: Number, default: null },
    customerID: {type: Number, default: null},
    totalSize: {type: Number, default: null},
    numStories: {type: Number, default: null},
    numBedrooms: {type: Number, default: null},
    numBathrooms: {type: Number, default: null},
    acType: {type: String, default: null},
    heatingType: {type: String, default: null},
    installationDate: {type: Date, default: null}
});