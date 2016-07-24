"use strict"

const mongoose = require("mongoose");

module.exports = mongoose.model("User", {
    id: {type: Number, default: null },
    firstName: {type: String, default: null},
    lastName: {type: String, default: null},
    email: {type: String, default: null},
    password: {type: String, default: null},
    role: {type: String, default: null}
});