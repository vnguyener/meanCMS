"use strict"

const server = require('./server/server');

server.start({
    port: 9000,
    preRequest: function(json, req, res) {
        console.log('preRequest Fired');
    },
    postRequest: function(json, req, res) {
        console.log('postRequest Fired');
    }
});
