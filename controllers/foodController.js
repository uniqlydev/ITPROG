const Food = require('../models/food');
const db = require('../database/db');

// GET /api/food
/* This code exports a function named `getFood` that handles a GET request to retrieve all
food from a database table named `Food`. It uses the `db.query` method to execute a SQL
query to select all rows from the `Food` table. If the query is successful, it returns a JSON
response with a `200` status code and an object containing an array of `food` retrieved from
the database. If the query fails, it returns a `404` status code with an error message. */
exports.getFoods = (req, res, next) => {
    db.query('SELECT * FROM Food', (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                food: rows
            });
        } else {
            res.status(404).json({
                message: 'Food not found!'
            });
        }
    });
}

// GET /api/food/:id
/* `exports.getFood` is a function that handles a GET request to retrieve a single food from a
database table named `Food`. It uses the `req.params.id` to get the id of the food to be
retrieved. It then executes a SQL query to select the row from the `Food` table where the `id`
matches the `req.params.id`. If the query is successful, it returns a JSON response with a `200`
status code and an object containing the `food` retrieved from the database. If the query fails,
it returns a `404` status code with an error message. */
exports.getFoodByID = (req, res, next) => {
    const id = req.params.id;
    db.query('SELECT * FROM Food WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                food: rows[0]
            });
        } else {
            res.status(404).json({
                message: 'Food not found!'
            });
        }
    });
}

// GET /api/food/type
/* `exports.getFood` is a function that handles a GET request to retrieve all food from a
database table named `Food`. It uses the `req.params.type` to get the type of the food to be
retrieved. It then executes a SQL query to select the row from the `Food` table where the `type`
matches the `req.params.type`. If the query is successful, it returns a JSON response with a `200`
status code and an object containing the `food` retrieved from the database. If the query fails,
it returns a `404` status code with an error message. */
exports.getAllPerType = (req, res, next) => {
    const type = req.params.type;
    db.query('SELECT * FROM Food WHERE type = ?', [type], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                food: rows
            });
        } else {
            res.status(404).json({
                message: 'Food not found!'
            });
        }
    });
}

// POST /api/food
/* `exports.createFood` is a function that handles a POST request to create a new food in a
database table named `Food`. It uses the `req.body` to get the details of the food to be
created. It then executes a SQL query to insert a new row into the `Food` table with the
details of the food to be created. If the query is successful, it returns a JSON response with
a `201` status code and an object containing the `food` created. If the query fails, it returns
a `400` status code with an error message. */
exports.createFood = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;
    const protein = req.body.protein;
    const type = req.body.type;

    const food = {
        name: name,
        price: price,
        image: image,
        description: description,
        protein: protein,
        type: type
    };

    db.query('INSERT INTO Food SET ?', food, (err, result) => {
        if (!err) {
            const insertedFood = {
                id: result.insertId,
                ...food
            };
            res.status(201).json({
                food: insertedFood
            });
        } else {
            res.status(400).json({
                message: 'Failed to create food!'
            });
        }
    });
}





// PUT /api/food/:id
/* `exports.updateFood` is a function that handles a PUT request to update a food in a
database table named `Food`. It uses the `req.params.id` to get the id of the food to be
updated. It then executes a SQL query to update the row in the `Food` table where the `id`
matches the `req.params.id` with the details of the food to be updated. If the query is
successful, it returns a JSON response with a `200` status code and an object containing the
`food` updated. If the query fails, it returns a `400` status code with an error message. */
exports.updateFood = (req, res, next) => {
    const id = req.params.id;
    const food = new Food({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    });
    db.query('UPDATE Food SET ? WHERE id = ?', [food, id], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                food: rows
            });
        } else {
            res.status(400).json({
                message: 'Failed to update food!'
            });
        }
    });
}

// DELETE /api/food/:id
/* `exports.deleteFood` is a function that handles a DELETE request to delete a food from a
database table named `Food`. It uses the `req.params.id` to get the id of the food to be
deleted. It then executes a SQL query to delete the row from the `Food` table where the `id`
matches the `req.params.id`. If the query is successful, it returns a JSON response with a `200`
status code and an object containing the `food` deleted. If the query fails, it returns a `400`
status code with an error message. */
exports.deleteFood = (req, res, next) => {
    const id = req.params.id;
    db.query('DELETE FROM Food WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                food: rows
            });
        } else {
            res.status(400).json({
                message: 'Failed to delete food!'
            });
        }
    });
}

