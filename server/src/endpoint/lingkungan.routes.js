const { createLingkungan, getAllLingkungan } = require('../routes/LingkunganRoutes')    

module.exports = function(app){
    app.post('/lingkungan/add', createLingkungan);
    app.get('/lingkungan/list', getAllLingkungan);
}
