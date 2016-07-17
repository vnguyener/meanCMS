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
router.get('/user/authenticate', authenticate)

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
    let list = GetUserList();
    let data = utils().findById(list, 1);
    console.log(data);
    res.status(200).json(data);
};

function authenticate(username, password) {
    userService.authenticate(req.body.username, req.body.password)
        .then(function (token) {
            if (token) {
                // authentication successful
                res.send({ token: token });
            } else {
                // authentication failed
                res.sendStatus(401);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}