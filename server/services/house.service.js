"use strict"

const mongoose = require('mongoose'),
    q = require('q'),
    config = require('../config.json'),
    house = require('../models/house.model'),
    room = require('../models/room.model'),
    uri = config.connectionStrings.cms;

// database connection
mongoose.connect(uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uri + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uri);
    }
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

// exports
module.exports = {
    saveHouseDetails: saveHouseDetails,
    getHouseByCustomerId: getHouseByCustomerId,
    getRoomsByHouseId: getRoomsByHouseId
};

// functions
function getHouseByCustomerId(id) {
    let deferred = q.defer();
    house.findOne({ 'customerID': id }, (error, details) => {
        if (error) {
            deferred.reject(error);
        }
        else if (details) {
            deferred.resolve(details);
        }
        else {
            deferred.reject({ message: 'Internal Server Error' });
        }
    });

    return deferred.promise;
}

function getRoomsByHouseId(id) {
    let deferred = q.defer();
    room.find({ 'homeID': id }, (error, rooms) => {
        if (error) {
            deferred.reject(error);
        }
        else if (rooms) {
            deferred.resolve(rooms);
        }
        else {
            deferred.reject({ message: 'Internal Server Error' });
        }
    });

    return deferred.promise;
}

function saveHouseDetails(obj) {
    let deferred = q.defer();

    let newHouse = new house({
        homeID: null,
        customerID: obj.customerId,
        totalSize: obj.homeInfo.totalSize,
        numStories: obj.homeInfo.numStories,
        numBedrooms: obj.homeInfo.numBedrooms,
        numBathrooms: obj.homeInfo.numBathrooms,
        acType: obj.homeInfo.acType,
        heatingType: obj.homeInfo.heatingType,
        installationDate: obj.homeInfo.installationDate
    });

    house.findOne().sort('-homeID').limit(1).exec((error, house) => {
        newHouse.homeID = house.homeID + 1;
        newHouse.save((error, res) => {
            if (error) {
                console.log(error);
                deferred.reject({ message: 'Error on saveHouseDetails' });
            }
            else {
                if (obj.roomsInfo) {
                    saveRooms(res.homeID, obj.roomsInfo);
                }
                deferred.resolve({ message: 'Save Successful.' });
            }
        });
    });

    return deferred.promise;
};

function saveRooms(homeID, rooms) {
    rooms.forEach((obj) => {
        let newRoom = new room({
            homeID: homeID,
            size: obj.size,
            numWindows: obj.numWindows,
            numStory: obj.numStory
        });

        newRoom.save((error, res) => {
            if (error) {
                return error;
            } else {
            }
        });
    });
}