const express = require('express');
const app = express();
// const DbDrug = require('./dbService/dataBaseDrug')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
require ('./routes/DrugRoute')(app)
require('./endpoint/user.router')(app)

app.listen(process.env.PORT, () => {
    console.log(`server running`)
})



