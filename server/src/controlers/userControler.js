
let instance = null;
const connection = require('../dbService/dataBaseDrug')



class DbUser {
    static getInstaceUser () {
        return instance ? instance : new DbUser();
    }

    async createUser(user) {
        try{
            const { firstName, lastName, gender, email, password, number } = user;
            
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO user_sehatyuks (firstName, lastName, gender, email, password, number) VALUES (?,?,?,?,?,?);"

                connection.query(query,[firstName, lastName, gender, email, password, number] ,(err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result[0]);
                })
            });
            return response
        }catch{

        }
    }
}

module.exports = DbUser;