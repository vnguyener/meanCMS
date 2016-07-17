"use strict"

const express = require('express'),
    router = express.Router(),
    https = require('https'),
    http = require('http');
    houseService = require('../../services/house.service');

/* "/api/house"
*   GET: finds house by id,
*   PUT: update house by id
*   POST: creates a new house
*   DELETE: deletes existing house by id
*/

router.get('/house/:id', getHomeDetails);
router.post('/house/save', addHome);
router.put('/house/:id/edit', updateHome);
route.post('/house/:id/room/save', addRoom);

//router.delete('/house/delete', deleteCustomerById);

module.exports = router;

function getHouseDetails(req, res) {

}

function addHouse(req, res) {

}

function updateHouse(req, res) {

}

function addRoom(req, res) {

}