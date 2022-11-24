const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// const dbService = require('./dbService');
const DbDrug = require('../dbService/dataBaseDrug');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


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
    .then(data => response.json({ data: data }))
    .catch(err => console.log(err.message))
})



app.get('/obat/list', (request, response) => {
    const dataBase = DbDrug.getInstaceDrug();
    const result = dataBase.getAllDrug();

    result
    .then(data => response.json({data: data}))
    .catch( err => console.log(err.message))
})


app.listen(process.env.PORT, () => {
    console.log(`server running`)
})



