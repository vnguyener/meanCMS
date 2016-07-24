"use strict"

const mongoose = require("mongoose");

module.exports = mongoose.model("Customer", {
    id: {type: Number, default: null },
    firstName: {type: String, default: null},
    lastName: {type: String, default: null},
    address: {type: String, default: null},
    phoneNumber: {type: String, default: null},
    email: {type: String, default: null}
});