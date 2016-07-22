"use strict"

const mongoose = require('mongoose');

module.exports = mongoose.model('Room', {
    homeID: {type: Number, default: null},
    size: {type: Number, default: null},
    numWindows: {type: Number, default: null},
    numStory: {type: Number, default: null}
});