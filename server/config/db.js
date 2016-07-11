"use strict"

const mongoose = require('mongoose');
//todo require models

function MongoDatabase() {
    let self = this;
    let hasConnected = false;

    function connect() {
        mongoose.connect();
        hasConnected = true;
    }

    function getUser() {
        return true;
    }
    
    return {
        connect: connect,
        getUser: getUser
    };
}

module.exports = MongoDatabase;