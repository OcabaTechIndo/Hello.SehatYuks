const { checkToken } = require('../auth/auth')
const { createDrug, getAllDrug, gedDrugByid, } = require('../routes/DrugRoute')    

module.exports = function(app){
    app.post('/obat/add', checkToken,createDrug);
    app.post('/obat/list', checkToken, getAllDrug);
    app.get('/obat/detail/:id', checkToken, gedDrugByid);
}