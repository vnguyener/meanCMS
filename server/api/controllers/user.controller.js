"use strict"

const express = require("express"),
    router = express.Router(),
    https = require("https"),
    http = require("http"),
    utils = require("../../common/utils"),
    userService = require("../../services/user.service");

/* "/api/user"
*   POST: "/user/authenticate" gets user from db sending params through body
*/


// routes
router.get("/user/:id", getUserById);
router.post("/user/authenticate", authenticate);


module.exports = router;

function getUserById(req, res) {
    userService.getUserById(req.params.id)
        .then((data) => {
            if (data) {
                res.status(200).send(data);
            }
        })
        .catch((error) => {
            res.status(500);
        });
};

function authenticate(req, res) {
    userService.authenticateUser(req.body.email, req.body.password)
        .then((data) => {
            if (data.id) {
                // if user.id exists
                res.status(200).send({ "message": "success" });
            } else {
                // if not throw a 401
                res.status(401).send({ "reason": data.message });
            }
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};