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
    res.status(200).json(
        {
            "customers": [
                {
                    "_id": "1",
                    "firstName": "Jane",
                    "lastName": "Doe"
                },
                {
                    "_id": "2",
                    "firstName": "Marsha",
                    "lastName": "Brady"
                },
            ]
        }
    )
}

function getCustomerById(req, res) {

}

function updateCustomerById(req, res) {

}

function createNewCustomer(req, res) {

}

function deleteCustomerById(req, res) {

}