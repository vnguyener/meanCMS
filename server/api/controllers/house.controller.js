"use strict"

const express = require('express'),
    router = express.Router(),
    https = require('https'),
    http = require('http'),
    houseService = require('../../services/house.service');

/* "/api/house"
*   GET: finds house by id,
*   PUT: update house by id
*   POST: creates a new house
*   DELETE: deletes existing house by id
*/

router.get('/house/:id', getHouseDetails);
router.get('/house/:id/rooms', getRooms);
router.post('/house/save', addHouse);
router.put('/house/:id/edit', updateHouse);
router.post('/house/:id/room/save', addRoom);

//router.delete('/house/delete', deleteCustomerById);

module.exports = router;

function getHouseDetails(req, res) {

    if (req.params.id) {
        houseService.getById(req.params.id)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                res.status(500).send(err);
            });
    }
};

function addHouse(req, res) {

};

function updateHouse(req, res) {

};

function addRoom(req, res) {

};

function getRooms(req, res) {
    if (req.params.id) {
        houseService.getRooms(req.params.id)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                res.status(500).send(err);
            });
    }
}