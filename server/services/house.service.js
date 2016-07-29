"use strict"

const mongoose = require("mongoose"),
    q = require("q"),
    config = require("../config.json"),
    house = require("../models/house.model"),
    room = require("../models/room.model"),
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
    createNewHouse: createNewHouse,
    getHouseByCustomerId: getHouseByCustomerId,
    getRoomsByHouseId: getRoomsByHouseId,
    updateHouseDetails: updateHouseDetails
};

// functions
function getHouseByCustomerId(id) {
    let deferred = q.defer();
    house.findOne({ "customerID": id }, (error, details) => {
        if (error) {
            deferred.reject(error);
        }
        else if (details) {
            deferred.resolve(details);
        }
        else {
            deferred.reject({ message: "Internal Server Error" });
        }
    });

    return deferred.promise;
}

function getRoomsByHouseId(id) {
    let deferred = q.defer();
    room.find({ "id": id }, (error, rooms) => {
        if (error) {
            deferred.reject(error);
        }
        else if (rooms) {
            deferred.resolve(rooms);
        }
        else {
            deferred.reject({ message: "Internal Server Error" });
        }
    });

    return deferred.promise;
}

function createNewHouse(obj) {
    let deferred = q.defer();

    let newHouse = new house({
        id: null,
        customerID: obj.customerId,
        totalSize: obj.homeInfo.totalSize,
        numStories: obj.homeInfo.numStories,
        numBedrooms: obj.homeInfo.numBedrooms,
        numBathrooms: obj.homeInfo.numBathrooms,
        acType: obj.homeInfo.acType,
        heatingType: obj.homeInfo.heatingType,
        installationDate: obj.homeInfo.installationDate
    });

    house.findOne().sort("-id").limit(1).exec((error, house) => {
        newHouse.id = ((house === null) ? 1 : house.id + 1);
        
        newHouse.save((error, res) => {
            if (error) {
                console.log(error);
                deferred.reject({ message: "Error on saveHouseDetails" });
            }
            else {
                if (obj.roomsInfo) {
                    saveRooms(res.id, obj.roomsInfo);
                }
                deferred.resolve({ message: "Save Successful." });
            }
        });
    });

    return deferred.promise;
};

function updateHouseDetails(id, obj) {
    let deferred = q.defer;

    house.findOneAndUpdate(
        { "id": id },
        {
            $set: {
                customerID: obj.customerId,
                totalSize: obj.homeInfo.totalSize,
                numStories: obj.homeInfo.numStories,
                numBedrooms: obj.homeInfo.numBedrooms,
                numBathrooms: obj.homeInfo.numBathrooms,
                acType: obj.homeInfo.acType,
                heatingType: obj.homeInfo.heatingType,
                installationDate: obj.homeInfo.installationDate
            }
        },
        {
            upsert: false,
            returnNewDocument: true
        },
        (err, updatedHouse) => {
            if (err) {
                console.log(error);
                deferred.reject(error);
            };

            if (updatedHouse) {
                updateRooms(obj.rooms);
                deferred.resolve({ message: "Update Successful." });
            };
        });

    return deferred.promise;
}

function saveRooms(id, rooms) {
    rooms.forEach((obj) => {

        let newRoom = new room({
            id: null,
            alias: obj.alias,
            homeID: id,
            size: obj.size,
            numWindows: obj.numWindows,
            numStory: obj.numStory
        });

        room.findOne().sort("-id").limit(1).exec((error, room) => {
            newRoom.id = ((room === null) ? 1 : room.id + 1);
            
            newRoom.save((error, res) => {
                if (error) {
                    return error;
                } else {
                    return res;
                }
            });
        });
    });
};

function updateRooms(homeID, rooms) {
    rooms.forEach((obj) => {
        room.findOneAndUpdate(
            { "id": obj.id },
            {
                $set: {
                    alias: obj.alias,
                    homeID: homeID,
                    size: obj.size,
                    numWindows: obj.numWindows,
                    numStory: obj.numStory
                }
            },
            {
                upsert: false,
                returnNewDocument: true
            },
            (err, updatedRoom) => {
                if (error) {
                    console.log(error);
                    return error;
                }

                if (updatedRoom) {
                    return updatedRoom;
                }
            });
    });
}