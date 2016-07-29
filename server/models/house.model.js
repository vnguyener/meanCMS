"use strict"

const mongoose = require("mongoose");

module.exports = mongoose.model("House", {
    id: { 
        type: Number, 
        default: null, 
        required: true, 
        unique: true 
    },
    customerID: { 
        type: Number, 
        default: null, 
        required: true 
    },
    totalSize: { 
        type: Number, 
        default: null, 
        required: true 
    },
    numStories: { 
        type: Number, 
        default: null, 
        required: true 
    },
    numBedrooms: { 
        type: Number, 
        default: null, 
        required: true 
    },
    numBathrooms: { 
        type: Number, 
        default: null, 
        required: true 
    },
    acType: { 
        type: String, 
        default: null, 
        required: true 
    },
    heatingType: { 
        type: String, 
        default: null, 
        required: true 
    },
    installationDate: { 
        type: Date, 
        default: null, 
        required: true 
    }
});