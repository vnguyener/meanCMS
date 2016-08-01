# CMS w/ MEAN

## Summary

Simple CMS application using the MEAN stack.

## Structure

```javascript
/src - our client side
    / app - contains all of our front end angular
    / assets - contains all of our img, sass goodies
/ bower_modules - for our front end deps
/ node_modules - for our devving deps
/ dist - all of our minified files to deploy
/ server - housing our node/express backend
    / api - controller/routes
        /controllers - our api routes
        index.js - routes main module
    / models - our mongoose models for our restful api calls
    / common - helper/util modules to be dry
    / services - abstract business logic from controllers
    server.js - our express hub

app.js - to kick off our application, good place to handle pre/post request for auth
gulpfile.js - task runner for minifing, dist-ing, precompiling, linting
index.html - our "layout" html file.
json files for bower/npm/eslint configurations

:)

```
