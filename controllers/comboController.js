const db = require('../database/db');
const Combo = require('../models/combo');



// GET /api/combos
/* This code exports a function named `getCombos` that handles a GET request to retrieve all
combos from a database table named `Combo`. It uses the `db.query` method to execute a SQL
query to select all rows from the `Combo` table. If the query is successful, it returns a JSON
response with a `200` status code and an object containing an array of `combos` retrieved from
the database. If the query fails, it returns a `404` status code with an error message. */
exports.getCombos = (req, res, next) => {
    db.query('SELECT * FROM ComboMeals', (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                combos: rows
            });
        } else {
            res.status(404).json({
                message: 'Combos not found!'
            });
        }
    });
}

// GET /api/combos/:id
/* `exports.getCombo` is a function that handles a GET request to retrieve a single combo from a
database table named `Combo`. It uses the `req.params.id` to get the id of the combo to be
retrieved. It then executes a SQL query to select the row from the `Combo` table where the `id`
matches the `req.params.id`. If the query is successful, it returns a JSON response with a `200`
status code and an object containing the `combo` retrieved from the database. If the query fails,
it returns a `404` status code with an error message. */
exports.getCombo = (req, res, next) => {
    const id = req.params.id;
    db.query('SELECT * FROM ComboMeals WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                combo: rows[0]
            });
        } else {
            res.status(404).json({
                message: 'Combo not found!'
            });
        }
    });
}