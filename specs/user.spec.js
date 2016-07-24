"use strict"

const expect = require('chai').expect,
    assert = require('chai').assert,
    userService = require('../server/services/user.service');

describe("user service", () => {
    it("authenticates an existing user", (done) => {
        console.log('start');
        let request = {
            body: {
                email: "vunguyen@mail.com",
                password: "password123"
            }
        };

        userService.authenticate(request.body.email, request.body.password)
            .then((data) => {
                expect(data).to.not.equal(undefined);
                assert.equal(data.email, "vunguyen@mail.com");
                done();
            })

    });
});