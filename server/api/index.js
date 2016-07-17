"use strict"

const user = require('./controllers/user.controller'),
    customer = require('./controllers/customer.controller'),
    home = require('./controllers/house.controller');

function Routes(app) {
    app = app || {};

    // for loading up the front-end -- angular client
    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: 'dist' });
    });

    // registering api routes
    app.use('/api', customer);
    app.use('/api', user);
    app.use('/api', home);
};

module.exports = Routes;