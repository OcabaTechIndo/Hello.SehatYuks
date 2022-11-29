    const { checkToken } = require('../auth/auth')
    const { createDataUser } = require('../routes/userRoute')    

    module.exports = function(app){
        app.post('/user/add',checkToken, createDataUser);
    }