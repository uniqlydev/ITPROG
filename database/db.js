const mysql = require('mysql');
const env = require('dotenv').config();


// Set database connection credentials
const config = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
});

module.exports = config;

