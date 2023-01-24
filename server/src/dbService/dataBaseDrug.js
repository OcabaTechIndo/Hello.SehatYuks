const mysql = require('mysql2');
require('dotenv').config();
 const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

module.exports = connection;

