const Customers = require('../models/customer');
const db = require('../database/db');


// GET /api/customers
/* This code exports a function named `getCustomers` that handles a GET request to retrieve all
customers from a database table named `Customer`. It uses the `db.query` method to execute a SQL
query to select all rows from the `Customer` table. If the query is successful, it returns a JSON
response with a `200` status code and an object containing an array of `customers` retrieved from
the database. If the query fails, it returns a `404` status code with an error message. */
exports.getCustomers = (req, res, next) => {
    db.query('SELECT * FROM Customer', (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                customers: rows
            });
        } else {
            res.status(404).json({
                message: 'Customers not found!'
            });
        }
    });
}

// GET /api/customers/:id
/* `exports.getCustomer` is a function that handles a GET request to retrieve a single customer from a
database table named `Customer`. It uses the `req.params.id` to get the id of the customer to be
retrieved. It then executes a SQL query to select the row from the `Customer` table where the `id`
matches the `req.params.id`. If the query is successful, it returns a JSON response with a `200`
status code and an object containing the `customer` retrieved from the database. If the query fails,
it returns a `404` status code with an error message. */
exports.getCustomer = (req, res, next) => {
    const id = req.params.id;
    db.query('SELECT * FROM Customer WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                customer: rows[0]
            });
        } else {
            res.status(404).json({
                message: 'Customer not found!'
            });
        }
    });
}

// POST /api/customers 
/* `exports.createCustomer` is a function that handles a POST request to create a new customer in a
database table named `Customer`. It extracts the necessary data from the request body, creates a new
`Customers` object with the extracted data, and then executes a SQL query to insert the new customer
into the `Customer` table. If the query is successful, it returns a JSON response with a `201`
status code and a success message along with the newly created `customer` object. If the query
fails, it returns a `404` status code with an error message that includes the SQL error message. */
exports.createCustomer = (req, res, next) => {
    const meal = req.body.meal;
    const drink = req.body.drink;
    const sides = req.body.sides;
    const total = req.body.total;
    const date =  new Date().toISOString().split('T')[0];
    const mquan = req.body.mquan;
    const squan = req.body.squan;
    const dquan = req.body.dquan;


    const customer = new Customers(meal, drink, sides, total, date, mquan, squan, dquan);

    db.query('INSERT INTO Customer SET ?', [customer], (err, rows, fields) => {
        if (!err) {
            res.status(201).json({
                message: 'Customer created successfully!',
                customer: customer
            });
        } else {
            res.status(404).json({
                // Show sql error message
                message: err.sqlMessage
            });
        }
    });
}

// PUT /api/customers/:id
/* `exports.updateCustomer` is a function that handles a PUT request to update an existing customer in
a database table named `Customer`. It extracts the necessary data from the request body, including
the `id` of the customer to be updated. It then creates a new `Customers` object with the extracted
data and executes a SQL query to update the row in the `Customer` table where the `id` matches the
`req.params.id`. If the query is successful, it returns a JSON response with a `200` status code and
a success message along with the updated `customer` object. If the query fails, it returns a `404`
status code with an error message. */
exports.updateCustomer = (req, res, next) => {
    const id = req.params.id;
    const meal = req.body.meal;
    const drink = req.body.drink;
    const sides = req.body.sides;
    const total = req.body.total;
    const date = req.body.date;
    const mquan = req.body.mquan;
    const squan = req.body.squan;
    const dquan = req.body.dquan;

    const customer = new Customers(meal, drink, sides, total, date, mquan, squan, dquan);

    db.query('UPDATE Customer SET ? WHERE id = ?', [customer, id], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                message: 'Customer updated successfully!',
                customer: customer
            });
        } else {
            res.status(404).json({
                message: 'Customer not found!'
            });
        }
    });
}

// DELETE /api/customers/:id
/* `exports.deleteCustomer` is a function that handles a DELETE request to delete a customer from a
database table named `Customer`. It extracts the `id` of the customer to be deleted from the request
parameters using `req.params.id`. It then executes a SQL query to delete the row from the `Customer`
table where the `id` matches the `req.params.id`. If the query is successful, it returns a JSON
response with a `200` status code and a success message. If the query fails, it returns a `404`
status code with an error message. */
exports.deleteCustomer = (req, res, next) => {
    const id = req.params.id;
    db.query('DELETE FROM Customer WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                message: 'Customer deleted successfully!'
            });
        } else {
            res.status(404).json({
                message: 'Customer not found!'
            });
        }
    });
}
