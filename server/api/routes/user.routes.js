"use strict"

const express = require('express'),
    router = express.Router(),
    https = require('https'),
    http = require('http');
    
    /* "/api/user"
    *   GET: finds user by id, authetication or viewing purposes
    *   PUT: update user by id
    */

function User() {

    function GetUserById(req, res) {
        res.status(200).json({
            "firstName": "Vu",
            "lastName": "Nguyen",
            "email": "vnguyen@gmail.com",
            "password": "password123",
            "role": "Consultant"
        });
    }

    return {
        view: GetUserById,
    }    
}

router.get('/user/:id', User().view);

module.exports = router;