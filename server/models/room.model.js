"use strict"

const mongoose = require('mongoose');

module.exports = mongoose.model('Room', {
    id: {type: Number, default: null },
    homeId: {type: Number, default: null},
    totalSize: {type: Number, default: null},
    numWindows: {type: Number, default: null},
    story: {type: Number, default: null}
});