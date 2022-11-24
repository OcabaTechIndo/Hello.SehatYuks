const express = require('express');
const app = express();

const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()

// const dbSevice = require('../dbService/dataBaseDrug');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended : false }));


// app.post('/obat/add', (request, response) => {
//     const { background, brand_name, name_general, numberdrugaccess,  summary } = request.body;

//     const dataBase = dbSevice.
// })


app.listen(process.env.PORT, () => {
    console.log(`server running}`)
})



