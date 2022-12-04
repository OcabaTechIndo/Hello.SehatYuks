const DbArticle = require('../controlers/articleControler')
    module.exports = {
        createArticle: (request, response) => {
            const {
                title, image, description
            } = request.body; 
        
            const ArticleData = {
                title, description
            }
            const dataBase = DbArticle.getInstaceArticle();
            const result = dataBase.insertArticleData(ArticleData);
        
            result
            .then(data => response.json({ data: data }))
            .catch(err => console.log(err));
        },
        
       getAllArticle: (request, response) => {
            const dataBase = DbArticle.getInstaceArticle();
            const result = dataBase.getAllArticle();
        
            result
            .then(data => response.json({Article: data}))
            .catch( err => console.log(err.message))
        }
    } 