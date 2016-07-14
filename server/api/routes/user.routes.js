"use strict"

const express = require('express'),
    router = express.Router(),
    https = require('https'),
    http = require('http'),
    utils = require('../../common/utils');

/* "/api/user"
*   GET: finds user by id, authetication or viewing purposes
*   PUT: update user by id
*/

function User() {
    function GetUserList() {
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

    function GetUserById(req, res) {
        let list = GetUserList();
        let data = utils().findById(list, 1);
        console.log(data);
        res.status(200).json(data);
    };

    return {
        view: GetUserById
    }
}

router.get('/user/:id', User().view);

module.exports = router;