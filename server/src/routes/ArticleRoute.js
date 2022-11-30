const DbArticle = require('../controlers/articleControler')
    module.exports = function(app){
        app.post('/article/add', (request, response) => {
            const {
                title, description
            } = request.body; 
        
            const ArticleData = {
                title, description
            }
            const dataBase = DbArticle.getInstaceArticle();
            const result = dataBase.insertArticleData(ArticleData);
        
            result
            .then(data => response.json({ data: data }))
            .catch(err => console.log(err));
        })
        
        app.get('/article/list', (request, response) => {
            const dataBase = DbArticle.getInstaceArticle();
            const result = dataBase.getAllArticle();
        
            result
            .then(data => response.json({Article: data}))
            .catch( err => console.log(err.message))
        })
    } 