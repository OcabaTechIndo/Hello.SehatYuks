let instance = null;
const connection = require('../dbService/dataBaseArticle)



class DbArticle {
    static getInstaceArticle () {
        return instance ? instance : new DbArticle();
    }


    async insertArticleData(ArticleData) {
        try {
            const { title, description } = ArticleData;
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO article_table (title, description VALUES (?,?);";

                connection.query(query, [title, description] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                title :title,
                description: description
            };
        } catch (error) {
            console.log(error);
        }
    }


    async getAllArticle() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM article_table";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch(err) {
            console.log(err.message);
        }
    }


    async getArticleById(id) {
        try{
            
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM article_table WHERE id = ?";

                connection.query(query,[id],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch(err) {
            console.log(err.message);
        }
    }

    
}

module.exports = DbArticle;