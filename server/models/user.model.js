"use strict"

const mongoose = require("mongoose"),
        Schema = mongoose.Schema,
        crypto = require("crypto"),
        jwt = require("jsonwebtoken");

// schema definition
let userSchema = new Schema({
    id: {
        type: Number,
        default: null,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        default: null,
        required: true
    },
    lastName: {
        type: String,
        default: null,
        required: true
    },
    email: {
        type: String,
        default: null,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: null,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});

// schema document instance methods
userSchema.methods.setPassword = function(password) {

    let obj = { 
        salt: null,
        hash: null
    }

    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    
    obj.salt = this.salt;
    obj.hash = this.hash;
    
    return obj
};

userSchema.methods.isValidPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        exp: parseInt(expiration.getTime() / 1000),
        }, "_SuperSecret_");
};

module.exports = mongoose.model("User", userSchema);
