const { createArticle, getAllArticle } = require('../routes/ArticleRoute')    

module.exports = function(app){
    app.post('/article/add', createArticle);
    app.get('/article/list', getAllArticle);

}
