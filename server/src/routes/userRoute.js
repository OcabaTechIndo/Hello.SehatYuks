
const { hashSync, genSaltSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken')
const DbUser = require('../controlers/userControler')
module.exports = {
    createDataUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        const dataBase = DbUser.getInstaceUser();
        const result = dataBase.createUser(body);

        result
            .then(data => {
                return res.status(200).json({
                    success: 1,
                    data: data
                  });
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            });
    }
}