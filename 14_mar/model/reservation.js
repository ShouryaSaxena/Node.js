

module.exports = (sequelize,Sequelize) =>{
    const reserve = sequelize.define("reserve",{
        
        Name:{
            type:Sequelize.STRING,
        },
        mobile:{
            type: Sequelize.INTEGER,
        },
        date:{
            type:Sequelize.STRING,
        },
        table:{
            type:Sequelize.STRING,
        },
    });

    return reserve;

};