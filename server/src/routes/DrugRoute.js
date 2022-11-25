// const express = require('express');
// const app = express();
// const cors = require('cors');
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended : false }));
const DbDrug = require('../dbService/dataBaseDrug')
    module.exports = function(app){
        app.post('/obat/add', (request, response) => {
            const {
                background, brand_name, name_general, numberdrugaccess, summary, indicator
            } = request.body; 
        
            const DrugData = {
                background, brand_name, name_general, numberdrugaccess, summary, indicator
            }
            const dataBase = DbDrug.getInstaceDrug();
            const result = dataBase.insertDrugData(DrugData);
        
            result
            .then(data => response.json({ data: data }))
            .catch(err => console.log(err));
        })
        
        app.get('/obat/list', (request, response) => {
            const dataBase = DbDrug.getInstaceDrug();
            const result = dataBase.getAllDrug();
        
            result
            .then(data => response.json({obat: data}))
            .catch( err => console.log(err.message))
        })
        
        app.get('/obat/detail/:id', (request, response) => {
            const { id } = request.params;
            const dataBase = DbDrug.getInstaceDrug();
            const result = dataBase.getDrugById(id)
        
            result
            .then(data => response.json({
                status: 'success',
                data: data}
                ))
            .catch( err => console.log(err.message))
        })
    } 