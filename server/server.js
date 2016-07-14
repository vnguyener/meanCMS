"use strict"

const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

let server = function (config) {
    config = config || {};

    let self = {};

    self.log = (message) => {
        if (config.log !== false) {
            console.log(message);
        }
    };

    self.error = (message) => { console.log(message) };

    self.start = () => {
        // configuration stuffs
        self.express = express();
        self.express.use(bodyParser.urlencoded({ extended: true }));
        self.express.use(bodyParser.json());
        self.express.use(methodOverride('X-HTTP-Method-Override'));
        self.express.use(express.static("dist"));

        // Start the server listening
        config.port = config.port || process.env.port || 80;
        let instance = self.express.listen(config.port);

        //configure routes
        require('./api/index')(self.express); // configure our routes

        self.log('magic happens on localhost:' + config.port);

        return instance;
    };

    return self;
}

server.start = (config) => {
    let instance = new server(config);
    instance.start();
    return instance;
}

module.exports = server;