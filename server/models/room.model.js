"use strict"

const mongoose = require("mongoose");

module.exports = mongoose.model("Room", {
    id: {
        type: Number,
        default: null,
        require: true,
        unique: true
    },
    homeID: {
        type: Number,
        default: null,
        required: true
    },
    size: {
        type: Number,
        default: null,
        required: true
    },
    numWindows: {
        type: Number,
        default: null,
        required: true
    },
    numStory: {
        type: Number,
        default: null,
        required: true
    },
    alias: {
        type: String,
        default: null,
        required: false
    }
});