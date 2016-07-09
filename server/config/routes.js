"use strict"

const express = require('express'),
    router = express.Router(),
    https = require('https'),
    http = require('http'),
    db = require('./db');

function Routes(app) {
    app = app || {};

    //todo - db.connect();
    //restful api routes for house

    app.get('*', (req, res) => {
        res.sendFile('index.html', { root: 'dist' });
    });
};

module.exports = Routes;