"use strict"

const express = require("express"),
    router = express.Router(),
    https = require("https"),
    http = require("http"),
    customerService = require("../../services/customer.service");

/* "/api/customers"
*   GET: gets all customers
*/

/* "/api/customer"
*   GET: finds customer by id
*   PUT: update customer by id - todo
*   POST: creates a new customer
*   DELETE: deletes existing customer by id - todo
*/

router.get("/customers", getCustomers);
router.get("/customer/:id", getCustomerById);
router.put("/customer/:id/edit", updateCustomerById);
router.post("/customer/save", createNewCustomer);
router.delete("/customer/delete", deleteCustomerById);

module.exports = router;

function getCustomers(req, res) {
    customerService.getAllCustomers()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

function getCustomerById(req, res) {

    if (req.params.id) {

        // validate
        req.checkParams("id", "Invalid ID").notEmpty().isInt();

        // sanitize
        req.sanitizeParams("id").toInt();

        let errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
            customerService.getById(req.params.id)
                .then((data) => {
                    res.status(200).send(data);
                })
                .catch((err) => {
                    res.sendStatus(500);
                });
        }
    }
};

function updateCustomerById(req, res) {
    if (req.params.id && req.body) {

        // validate
        req.checkParams("id", "Invalid ID").notEmpty().isInt();
        req.checkBody("customer", "Invalid post params").notNull();
        // sanitize
        req.sanitizeParams("id").toInt();

        let errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
            customerService.updateById(req.params.id, req.body)
                .then((data) => {
                    res.status(204).send(data);
                })
                .catch((err) => {
                    res.sendStatus(500);
                });
        }
    }
};

function createNewCustomer(req, res) {

    if (req.body) {

        // validate
        req.checkBody("firstName", "Invalid First Name.").notEmpty().isAlpha();
        req.checkBody("lastName", "Invalid Last Name.").notEmpty().isAlpha();
        req.checkBody("address", "Invalid Address.").notEmpty();
        req.checkBody("phoneNumber", "Invalid Phone Number.").notEmpty();
        req.checkBody("email", "Invalid Email Address.").notEmpty().isEmail();

        // sanitize
        try {
            req.sanitizeBody("firstName").escape().trim();
            req.sanitizeBody("lastName").escape().trim();
            req.sanitizeBody("address").escape().trim();
            req.sanitizeBody("phoneNumber").escape().trim();
            req.sanitizeBody("email").escape().trim();

            let errors = req.validationErrors();

            if (errors) {
                res.send(errors);
                return;
            } else {
                customerService.createCustomer(req.body)
                    .then((data) => {
                        res.status(201).send({ id: data.id });
                    })
                    .catch((err) => {
                        res.sendStatus(500);
                    });
            }
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
};

function deleteCustomerById(req, res) {
    if (req.params.id) {

        // validate
        req.checkBody("id", "Invalid ID").notEmpty().isInt();

        // sanitize
        req.sanitizeBody("id").toInt();

        let errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
            customerService.removeCustomer(req.body)
                .then((data) => {
                    res.sendStatus(200);
                })
                .catch((err) => {
                    res.sendStatus(500);
                });
        }
    };
};