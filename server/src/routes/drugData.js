let express = require('express');
const DbDrug = require('../dbService/dataBaseDrug');
let app = express();
module.exports = function(app){
app.post('/obat/add', (request, response) => {
        const { background, brand_name, name_general, numberdrugaccess, summary } = request.body;
        const DrugData = {
            background,
            brand_name,
            name_general,
            numberdrugaccess,
            summary
        }
        console.log(DrugData);
        const dataBase = DbDrug.getInstaceDrug();
        const result = dataBase.insertDrugData(DrugData);

        result
        .then(data => response.json({ 
            status: 'success',
            data: data 
        }))
        .catch(err => console.log(err.message))
    })

app.get('/obat/list', (request, response) => {
        const dataBase = DbDrug.getInstaceDrug();
        const result = dataBase.getAllDrug();

        result
        .then(data => response.json({data: data}))
        .catch( err => console.log(err.message))
    })
}