"use strict"

const mongoose = require("mongoose");

module.exports = mongoose.model("Customer", {
    id: { 
        type: Number, 
        default: null, 
        required: true,
        unique: true 
    },
    firstName: { 
        type: String, 
        default: null, 
        required: true 
    },
    lastName: { 
        type: String, 
        default: null, 
        required: true 
    },
    address: { 
        type: String, 
        default: null, 
        required: true 
    },
    phoneNumber: { 
        type: String, 
        default: null, 
        required: true 
    },
    email: { 
        type: String, 
        default: null, 
        required: true,
        unique: true 
    }
});