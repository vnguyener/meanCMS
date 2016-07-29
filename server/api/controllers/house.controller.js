"use strict"

const express = require("express"),
    router = express.Router(),
    https = require("https"),
    http = require("http"),
    houseService = require("../../services/house.service");

/* "/api/house"
*   GET: finds house by id,
*   PUT: update house by id - todo
*   POST: creates a new house
*   DELETE: deletes existing house by id - todo
*/

router.get("/house/:id", getHouseByCustomerId);
router.get("/house/:id/rooms", getRoomsByHouseId);
router.put("/house/:id/edit", updateHouseDetails)
router.post("/house/save", saveHouseDetails);

module.exports = router;

function getHouseByCustomerId(req, res) {
    if (req.params.id) {
        houseService.getHouseByCustomerId(req.params.id)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                res.sendStatus(500);
            });
    }
};

function getRoomsByHouseId(req, res) {
    if (req.params.id) {
        houseService.getRoomsByHouseId(req.params.id)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                res.sendStatus(500);
            });
    }
};

function saveHouseDetails(req, res) {
    if (req.body) {
        houseService.createNewHouse(req.body)
            .then((data) => {
                res.sendStatus(200);
            })
            .catch((error) => {
                res.sendStatus(500);
            });
    }
};

function updateHouseDetails(req, res) {
    if (req.params.id && req.body) {
        houseService.updateHouseDetails(req.params.id , req.body)
            .then((data) => {
                res.sendStatus(200);
            })
            .catch((error) => {
                res.sendStatus(500);
            });
    }
};