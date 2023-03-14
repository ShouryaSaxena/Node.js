// exporting the student model 
const create = require("../model");

// importing the sequelized model
const Customer = create.student;

const Op = create.Sequelize.Op;

const displayForm = (req, res) => {
    res.sendFile("C:/Users/ShouryaSaxena/Node.js/14_mar/public/index.html")
}

//---------------Adding data to the database-----------------------

const reserve = async (req, res) => {
    console.log(req.body.number);
    if (!req.body.Name) {
        res.status(400).json({ message: "name cannot be  empty " });
    }

    const reserved = {
        Name: req.body.Name,
        number: req.body.number,
        date: req.body.date,
        table: req.body.table,
    };
    console.log(reserved);

    Customer.reserve(reserved)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: `${err} Some Error occured in creating a new student  ` });
        })
}




// //---------------Deleting the stored data based on rollno.-----------------------

// const deleteBooking = async (req, res) => {

//     let { mobile } = req.body;
//     console.log(mobile);
//     let deleted;
//     deleted = await user.deleteOne({ mobile: mobile });
//     console.log(deleted);
//     return false;
// }


// //-----------------Exporting various controle functions (api's) to other js files--------------

// exports.show_bookings = show_bookings;
exports.reserve = reserve;
exports.displayForm = displayForm;
// exports.deleteBooking = deleteBooking;