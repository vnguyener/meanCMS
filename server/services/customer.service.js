"use strict"

const mongoose = require("mongoose"),
    q = require("q"),
    config = require("../config.json"),
    customer = require("../models/customer.model"),
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
        console.log("Mongoose default connection disconnected on app termination.");
        process.exit(0);
    });
});

// exports
module.exports = {
    getById: getById,
    getAllCustomers: getAllCustomers,
    createCustomer: createCustomer,
    updateById: updateCustomerById,
    removeCustomer: removeCustomer
};

// functions
function getById(id) {
    let deferred = q.defer();
    customer.findOne({ "id": id }, (error, customer) => {
        if (error) {
            console.log(error);
            deferred.reject(error);
        }

        if (customer) {
            deferred.resolve(customer);
        }
        else {
            deferred.reject({ message: "Internal Server Error" });
        }
    });
    return deferred.promise;
};

function getAllCustomers() {
    let deferred = q.defer();

    customer.find({}, (error, customers) => {
        if (error) {
            console.log(error);
            deferred.reject(error);
        }

        if (customers) {
            deferred.resolve(customers);
        }
    });

    return deferred.promise;
};

// notes: createCustomer grabs last customer documents's id and increments it.. this isn't as efficient want to do an update $inc seq: 1 on insert

function createCustomer(obj) {
    let deferred = q.defer();

    let newCustomer = new customer({
        id: null,
        firstName: obj.firstName,
        lastName: obj.lastName,
        address: obj.address,
        phoneNumber: obj.phoneNumber,
        email: obj.email
    });

    customer.findOne().sort("-id").limit(1).exec((error, customer) => {
        newCustomer.id = ((customer === null) ? 1 : customer.id + 1);
        newCustomer.save((error, res) => {
            if (error) {
                console.log(error);
                deferred.reject(error);
            }

            if (res) {
                deferred.resolve({
                    id: res.id
                });
            }
        });
    });
    return deferred.promise;
};

function updateCustomerById(id, obj) {
    let deferred = q.defer();

    customer.findOneAndUpdate(
        { "id": id },
        {
            $set: {
                firstName: obj.customer.firstName,
                lastName: obj.customer.lastName,
                address: obj.customer.address,
                phoneNumber: obj.customer.phoneNumber,
                email: obj.customer.email
            }
        },
        {
            upsert: false,
            returnNewDocument: true
        },
        (err, customer) => {
            if (err) {
                console.log(error);
                deferred.reject(error);
            };

            if (customer) {
                deferred.resolve(customer);
            };
        });

    return deferred.promise;
}

function removeCustomer(obj) {
    let deferred = q.defer();

    customer.findOneAndRemove({ "id": obj.customer.id }, (err, res) => {
        if (err) {
            console.log(err);
            deferred.reject(err);
        }

        if (res) {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
}