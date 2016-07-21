"use strict"

const express = require('express'),
    router = express.Router(),
    https = require('https'),
    http = require('http'),
    customerService = require('../../services/customer.service');

/* "/api/customers"
*   GET: finds customer by id, authetication or viewing purposes
*/

/* "/api/customer"
*   GET: finds customer by id, authetication or viewing purposes
*   PUT: update customer by id
*   POST: creates a new customer
*   DELETE: deletes existing customer by id
*/

router.get('/customers', getCustomers);
router.get('/customer/:id', getCustomerById);
router.post('/customer/save', createNewCustomer);
router.put('/customer/:id/edit', updateCustomerById);
router.delete('/customer/delete', deleteCustomerById);

module.exports = router;

function getCustomers(req, res) {
    customerService.getAllCustomers()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err)
        });
}

function getCustomerById(req, res) {    
    if (req.params.id) {
        customerService.getById(req.params.id)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err)
            });
    }
}

function updateCustomerById(req, res) {

}

function createNewCustomer(req, res) {

}

function deleteCustomerById(req, res) {

}