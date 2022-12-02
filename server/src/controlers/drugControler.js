
let instance = null;
const connection = require('../dbService/dataBaseDrug')



class DbDrug {
    static getInstaceDrug () {
        return instance ? instance : new DbDrug();
    }


    async insertDrugData(DrugData) {
        try {
            const { Summary, name_general, image_drug, indication, brand_name, background } = DrugData;
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO drug_table (Summary, name_general, image_drug, indication, brand_name, background) VALUES (?,?,?,?,?,?);";

                connection.query(query, [Summary, name_general, image_drug, indication, brand_name, background] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                Summary: Summary,
                name_general: name_general,
                image_drug: image_drug,
                indication: indication,
                brand_name: brand_name,
                background: background
            };
        } catch (error) {
            console.log(error);
        }
    }


    async getAllDrug() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT Summary, name_general, image_drug FROM drug_table";

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