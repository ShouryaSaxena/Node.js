// making the  sequelize connections 
const dbconfig = require("../config.js");  // importing the dbconfig module
const Sequelize = require("sequelize");              // importing the sequelize module 

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {

    host: dbconfig.HOST,
    port: dbconfig.PORT,
    dialect: dbconfig.dialect,

    pool: {

        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle,
    },
});

sequelize.authenticate()
.then(() => {
    console.log("Connected...");
})
.catch(error => {
    console.log(error);
})
const student = {};

student.Sequelize = Sequelize;
student.sequelize = sequelize;

student.student = require("./student.js")(sequelize, Sequelize);

module.exports = student;