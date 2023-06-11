const Customers = require('../models/customer');
const db = require('../database/db');


// GET /api/customers
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
