const { createCovid, getAllCovid } = require('../routes/CovidRoute')    

module.exports = function(app){
    app.post('/covid/add', createCovid);
    app.get('/covid/list', getAllCovid);
}
