"use strict"

const express = require("express"),
    router = express.Router(),
    https = require("https"),
    http = require("http"),
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

    //validating
    req.checkBody("email", "Invalid Username.").notEmpty().isEmail();
    req.checkBody("password", "Invalid password.").notEmpty();

    //sanitizing
    try {
        req.sanitizeBody("email").escape().toString().trim();
        req.sanitizeBody("password").escape().toString().trim();
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

    let errors = req.validationErrors();

    if (errors) {
        res.status(500).send(errors);
        return;
    } else {
        userService.authenticateUser(req.body.email, req.body.password)
            .then((data) => {
                if (data.id) {
                    // if user.id exists
                    // create jwt token
                    res.status(200).send({ "message": "success" });
                } else {
                    // if not throw a 401
                    res.status(401).send({ "reason": data.message });
                }
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
};