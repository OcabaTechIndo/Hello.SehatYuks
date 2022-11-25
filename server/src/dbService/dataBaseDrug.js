const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});


class DbDrug {
    static getInstaceDrug () {
        return instance ? instance : new DbDrug();
    }


    async insertDrugData(DrugData) {
        try {
            const { background, brand_name, name_general, numberdrugaccess, summary } = DrugData;
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO drug_table (background, brand_name, name_general, numberdrugaccess, summary) VALUES (?,?,?,?,?);";

                connection.query(query, [background, brand_name, name_general, numberdrugaccess, summary] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                background: background, 
                brand_name: brand_name, 
                name_general: name_general, 
                numberdrugaccess: numberdrugaccess, 
                summary: summary
            };
        } catch (error) {
            console.log(error);
        }
    }


    async getAllDrug() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM drug_table";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch(err) {
            console.log(err.message);
        }
    }


    async getDrugById(id) {
        try{
            
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM drug_table WHERE id = ?";

                connection.query(query,[id],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch(err) {
            console.log(err.message);
        }
    }

    
}

module.exports = DbDrug;