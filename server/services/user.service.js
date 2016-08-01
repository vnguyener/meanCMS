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

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});

// exports
module.exports = {
    authenticateUser: authenticateUser,
    getUserById: getUserById
};

// functions
function authenticateUser(email, password) {
    let deferred = q.defer();

    user.findOne({ "email": email }, (error, user) => {
        if (error) {
            deferred.reject(error);
        }

        if (user) {
            let isValidPassword = user.isValidPassword(password);
            if (!isValidPassword) {
                deferred.resolve({ message: "UnauthorizedError: Invalid email and/or password." })
            }
            else {
                deferred.resolve(user);
            }
        }
        else {
            deferred.resolve({ message: "UnauthorizedError: Invalid email and/or password." })
        }
    });

    return deferred.promise;
};

function getUserById(id) {
    let deferred = q.defer();

    user.findOne({ "id": id }, (error, user) => {
        if (error) {
            deferred.reject(error);
        }

        if (user) {
            deferred.resolve(user);
        }
    });

    return deferred.promise;
};