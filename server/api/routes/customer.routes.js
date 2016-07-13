"use strict"

const express = require('express'),
    router = express.Router(),
    https = require('https'),
    http = require('http');

/* "/api/customers"
*   GET: finds customer by id, authetication or viewing purposes
*/

/* "/api/customer"
*   GET: finds customer by id, authetication or viewing purposes
*   PUT: update customer by id
*   POST: creates a new customer
*   DELETE: deletes existing customer by id
*/

function Customer() {

    function GetCustomers(req, res) {

        // get request body
        // call db 
        // handle error and res
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

    function GetCustomerById(req, res) {

    }

    function UpdateCustomerById(req, res) {

    }

    function CreateNewCustomer(req, res) {

    }

    function DeleteCustomerById(req, res) {

    }

    return {
        list: GetCustomers,
        add: CreateNewCustomer,
        view: GetCustomerById,
        update: UpdateCustomerById,
        remove: DeleteCustomerById
    }
}

router.get('/customers', Customer().list);
router.get('/customer/:id', Customer().view);
router.post('/customer', Customer().add);
router.put('/customer/:id/edit', Customer().update);
router.delete('/customer', Customer().remove);


module.exports = router;