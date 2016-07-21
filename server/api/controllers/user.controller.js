"use strict"

const express = require('express'),
    router = express.Router(),
    https = require('https'),
    http = require('http'),
    utils = require('../../common/utils'),
    userService = require('../../services/user.service');

/* "/api/user"
*   GET: finds user by id, authetication or viewing purposes
*   PUT: update user by id
*/


// routes
router.get('/user/:id', getUserById);
router.get('/users', getUserList);
router.post('/user/authenticate', authenticate)

module.exports = router;

function getUserList() {
    return true; 
};

function getUserById(req, res) {
    return true;
};

function authenticate(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then((data) => {
            if (data) {
                // authentication successful
                console.log('controller res: ' + JSON.stringify(data));
                res.status(200).send({ token: 'yes' });
            } else {
                // authentication failed
                res.sendStatus(401);
            }
        })
        .catch((err) => {
            res.status(401).send(err.message);
        });
}