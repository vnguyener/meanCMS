"use strict"

const express = require("express"),
    router = express.Router(),
    jwt = require("jsonwebtoken");

router.get("/auth", auth);

module.exports = router;


// todo: validate entire cookie, maybe routes
function auth(req, res) {
    if (req.cookies) {
        jwt.verify(req.cookies.access_token, req.app.get("secret"), { issuer: "vtn" }, function (err, decoded) {
            if (err) {
                console.log(err);
                res.status(401).send(err);
            } else {
                console.log("Decoded: ", decoded);
                res.json({ isValid: true })
            }
        });
    } else {
        res.status(401);
    }
};
