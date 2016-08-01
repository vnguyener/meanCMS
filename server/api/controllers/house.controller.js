"use strict"

const express = require("express"),
    router = express.Router(),
    houseService = require("../../services/house.service");

/* "/api/house"
*   GET: finds house by id,
*   PUT: update house by id - todo
*   POST: creates a new house
*   DELETE: deletes existing house by id - todo
*/

//todo: clean routes for consistency
router.get("/house/:id", getHouseByCustomerId);
router.get("/house/:id/rooms", getRoomsByHouseId);
router.put("/house/:id/edit", updateHouseDetails);
router.post("/house/save", saveHouseDetails);

module.exports = router;

function getHouseByCustomerId(req, res) {
    if (req.params.id) {

        // todo: abstract validations out into common "sanitization" module

        // validate
        req.checkParams("id", "Invalid ID").notEmpty().isInt();

        // sanitize
        req.sanitizeParams("id").toInt();

        let errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
            houseService.getHouseByCustomerId(req.params.id)
                .then((data) => {
                    res.status(200).send(data);
                })
                .catch((error) => {
                    res.sendStatus(500);
                });
        }
    }
};

function getRoomsByHouseId(req, res) {
    if (req.params.id) {

        //validate
        req.checkParams("id", "Invalid ID").notEmpty().isInt();

        //sanitize
        req.sanitizeParams("id").toInt();

        let errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
            houseService.getRoomsByHouseId(req.params.id)
                .then((data) => {
                    res.status(200).send(data);
                })
                .catch((error) => {
                    res.sendStatus(500);
                });
        }
    }
};

function saveHouseDetails(req, res) {
    if (req.body) {
        // validate 
        req.checkBody("customerId", "Invalid Customer ID.").notEmpty().isInt();
        req.checkBody("homeInfo", "Invalid Post Param.").notEmpty();
        req.checkBody("homeInfo.totalSize", "Invalid Post Param.").notEmpty().isInt();
        req.checkBody("homeInfo.numStories", "Invalid Post Param.").notEmpty().isInt();
        req.checkBody("homeInfo.numBedrooms", "Invalid Post Param.").notEmpty().isInt();
        req.checkBody("homeInfo.numBathrooms", "Invalid Post Param.").notEmpty().isInt();
        req.checkBody("homeInfo.acType", "Invalid Post Param.").notEmpty();
        req.checkBody("homeInfo.heatingType", "Invalid Post Param.").notEmpty();
        req.checkBody("homeInfo.installationDate", "Invalid Post Param.").notEmpty().isDate();
        req.checkBody("roomsInfo", "Invalid Post Param.").isArray();
       
        // sanitize

        try {
            req.sanitizeBody("homeInfo.totalSize").escape().trim();
            req.sanitizeBody("homeInfo.numStories").escape().trim();
            req.sanitizeBody("homeInfo.numBedrooms").escape().trim();
            req.sanitizeBody("homeInfo.numBathrooms").escape().trim();
            req.sanitizeBody("homeInfo.acType").escape().trim();
            req.sanitizeBody("homeInfo.heatingType").escape().trim();
            req.sanitizeBody("homeInfo.installationDate").toDate();

            let errors = req.validationErrors();

            if (errors) {
                res.send(errors);
                return;
            } else {
                houseService.createNewHouse(req.body)
                    .then((data) => {
                        res.sendStatus(200);
                    })
                    .catch((error) => {
                        res.sendStatus(500);
                    });
            }
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
};

function updateHouseDetails(req, res) {
    if (req.params.id && req.body) {
        houseService.updateHouseDetails(req.params.id, req.body)
            .then((data) => {
                res.sendStatus(200);
            })
            .catch((error) => {
                res.sendStatus(500);
            });
    }
};