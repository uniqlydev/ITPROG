const Customers = require('../models/customer');


// Mini database 
var list = []; 

// GET /api/customers
exports.getCustomers = (req, res, next) => {
    res.status(200).json({
        customers: list
    });
}

// GET /api/customers/:id
exports.getCustomer = (req, res, next) => {
    const id = req.params.id;
    const customer = list.find(customer => customer.id === id);
    if (!customer) {
        res.status(404).json({
            message: 'Customer not found!'
        });
    }
    res.status(200).json({
        customer: customer
    });
}

// POST /api/customers 
exports.createCustomer = (req, res, next) => {
    const id = Math.random().toString();
    const meal = req.body.meal;
    const drink = req.body.drink;
    const sides = req.body.sides;
    const total = req.body.total;
    const date = req.body.date;

    const customer = new Customers(id, meal, drink, sides, total, date);
    list.push(customer);

    res.status(201).json({
        message: 'Customer created successfully!',
        customer: customer
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

    const customerIndex = list.findIndex(customer => customer.id === id);
    if (customerIndex < 0) {
        res.status(404).json({
            message: 'Customer not found!'
        });
    }

    list[customerIndex] = new Customers(id, meal, drink, sides, total, date);

    res.status(200).json({
        message: 'Customer updated successfully!',
        customer: list[customerIndex]
    });
}

// DELETE /api/customers/:id
exports.deleteCustomer = (req, res, next) => {
    const id = req.params.id;
    const customerIndex = list.findIndex(customer => customer.id === id);
    if (customerIndex < 0) {
        res.status(404).json({
            message: 'Customer not found!'
        });
    }

    list.splice(customerIndex, 1);

    res.status(200).json({
        message: 'Customer deleted successfully!'
    });
}
