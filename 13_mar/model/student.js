

module.exports = (sequelize,Sequelize) =>{
    const student = sequelize.define("student",{
        
        rollNo:{
            type:Sequelize.INTEGER,
        },
        studentName:{
            type: Sequelize.STRING,
        },
        subject:{
            type:Sequelize.STRING,
        },
    });

    return student;

};