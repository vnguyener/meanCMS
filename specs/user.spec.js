"use strict"

const expect = require("chai").expect,
    assert = require("chai").assert,
    userService = require("../server/services/user.service"),
    user = require("../server/models/user.model");

describe("user service", () => {
    it.skip("authenticates an existing user", (done) => {
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

describe("user model", () => {

    it.skip("encrypts a password", (done) => {
        let request = {
            body: {
                email: "vunguyen@mail.com",
                password: "password123"
            }
        };

        let newUser = new user();
        let res = newUser.setPassword(request.body.password);

        assert.isNotNull(res.hash);
        assert.isNotNull(res.salt);
        done();
    });

    it("validates a correct password", (done) => {
        let request = {
            body: {
                email: "vunguyen@mail.com",
                password: "password123"
            }
        };
        let newUser = new user();
        let res = newUser.setPassword(request.body.password);
        let isValid = newUser.isValidPassword("password123");
        done();
    });

    it("validates an incorrect password", (done) => {
        let request = {
            body: {
                email: "vunguyen@mail.com",
                password: "password123"
            }
        };
        
        let newUser = new user();
        let res = newUser.setPassword(request.body.password);
        let isValid = newUser.isValidPassword("password122");
        done();
    });
});