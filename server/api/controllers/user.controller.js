"use strict"

const express = require("express"),
    router = express.Router(),
    uuid = require("node-uuid"),
    jwt = require("jsonwebtoken"),
    userService = require("../../services/user.service"),
    Cookies = require("cookies");

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

    // validating
    req.checkBody("email", "Invalid Username.").notEmpty().isEmail();
    req.checkBody("password", "Invalid password.").notEmpty();

    // sanitizing
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
                    let key = uuid.v4();
                    req.app.set('secret', key);

                    let token = jwt.sign(data._id, key, {
                        issuer: "vtn",
                        expiresIn: "1h"
                    });
                    console.log(token);

                    new Cookies(req, res).set('access_token', token, {
                        httpOnly: true
                        //set exp on cookie?
                    });

                    res.sendStatus(200);

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