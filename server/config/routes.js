"use strict"

const authorize = require('../routes/authorize.routes'),
    customer = require('../routes/customer.routes');

function Routes(app) {
    app = app || {};

    // todo - db.connect();  
    // temp handle for angular route
    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: 'dist' });
    });

    //
    app.use('/api/authorize', authorize);
    app.use('/api/customer', customer);

};

module.exports = Routes;