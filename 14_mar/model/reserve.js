// creating the model for student database 

//const { sequelize } = require(".");

module.exports = (sequelize,Sequelize) =>{
    const book = sequelize.define("reserve",{
        Name:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        mobile:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        date:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        table_No:{
            type: Sequelize.STRING,
            allowNull:false,
        },
    });

    return book;

};