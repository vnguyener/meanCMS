"use strict"

const server = require('./server/config/server');

server.start({
    port: 9000,
    preRequest: function(json, req, res) {
    },
    postRequest: function(json, req, res) {
    }
});

