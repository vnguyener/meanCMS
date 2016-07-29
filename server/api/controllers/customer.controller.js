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
}

function getCustomerById(req, res) {
    if (req.params.id) {
        customerService.getById(req.params.id)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.sendStatus(500);
            });
    }
}

function updateCustomerById(req, res) {
    if (req.params.id && req.body) {
        customerService.updateById(req.params.id, req.body)
            .then((data) => {
                res.status(204).send(data);
            })
            .catch((err) => {
                res.sendStatus(500);
            });
    }
}

function createNewCustomer(req, res) {
    if (req.body) {
        customerService.createCustomer(req.body)
            .then((data) => {
                res.status(201).send({ id: data.id });
            })
            .catch((err) => {
                res.sendStatus(500);
            });
    }
}

function deleteCustomerById(req, res) {
    if (req.params.id) {
        customerService.removeCustomer(req.params.id)
            .then((data) => {
                res.sendStatus(200);
            })
            .catch((err) => {
                res.sendStatus(500);
            });
    }
}