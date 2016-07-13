"use strict"

const user = require('./routes/user.routes'),
    customer = require('./routes/customer.routes');

function Routes(app) {
    app = app || {};

    // for loading up the front-end -- angular client
    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: 'dist' });
    });

    // registering api routes
    app.use('/api', customer);
    app.use('/api', user);
};

module.exports = Routes;