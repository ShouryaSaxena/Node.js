// creating the model for student database 

//const { sequelize } = require(".");

module.exports = (sequelize,Sequelize) =>{
    const Student = sequelize.define("student",{
        rollNo:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        studentName:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        subjects:{
            type: Sequelize.STRING,
            allowNull:false,

        },
    });

    return Student;

};