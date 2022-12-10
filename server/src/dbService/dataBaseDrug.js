const mysql = require('mysql');

 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ocabatechindo',
    password: 'sehatyuks',
    database: 'sehatyuks',
    port: 3306
})

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});

module.exports = connection;

