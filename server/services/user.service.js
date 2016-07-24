"use strict"

const mongoose = require("mongoose"),
    q = require("q"),
    config = require("../config.json"),
    user = require("../models/user.model"),
    uri = config.connectionStrings.cms;

// database connection
mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log("ERROR connecting to: " + uri + ". " + err);
    } else {
        console.log("Succeeded connected to: " + uri);
    }
});

process.on("SIGINT", function() {  
  mongoose.connection.close(function () { 
    console.log("Mongoose default connection disconnected through app termination"); 
    process.exit(0); 
  }); 
}); 

// exports
module.exports = {
    authenticate: getUserByEmailPassword
};

// functions
function getUserByEmailPassword(email, password) {
    let deferred = q.defer();

    user.findOne({ "email": email, "password": password }, (error, user) => {
        if (error) {
            deferred.reject(error);
        }
        else if (user) {
            deferred.resolve(user);
        }
        else {
            deferred.reject({message: "Invalid email and/or password."})
        }
    });

    return deferred.promise;
}