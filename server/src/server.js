const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const drugData = require('./routes/drugData')(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
express.Router(drugData)

app.listen(process.env.PORT, () => {
    console.log(`server running`)
})



