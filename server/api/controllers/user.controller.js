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
    return [
        {
            "id": 1,
            "firstName": "Vu",
            "lastName": "Nguyen",
            "email": "vnguyen@gmail.com",
            "password": "password123",
            "role": "Consultant"
        },
        {
            "id": 2,
            "firstName": "Bob",
            "lastName": "Nguyen",
            "email": "bnguyen@gmail.com",
            "password": "password123",
            "role": "Consultant"
        }]
};

function getUserById(req, res) {
    res.status(200);
};

function authenticate(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then(function (data) {
            if (data) {
                // authentication successful
                console.log('controller res: ' + JSON.stringify(data));
                res.status(200).send({ token: 'yes' });
            } else {
                // authentication failed
                res.sendStatus(401);
            }
        })
        .catch(function (err) {
            res.status(401).send(err.message);
        });
}