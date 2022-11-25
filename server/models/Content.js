const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
    const content = Sequelize.define('Content', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description:{
            type: DataTypes.TEXT,
            allowNull: false
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt:{
            type: DataTypes.DATE,
            allowNull: false
          }
    },{
        tabelname: 'contents'
    });

    return content;
}