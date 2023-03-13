// exporting the student model 
const Results = require("../model");

// importing the sequelized model
const Student = Results.results;

const Op = Results.Sequelize.Op;

// creating a new student 

exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: "name cannot be  empty " });
    }

    const student = {
        rollNo: req.body.rollNo,
        studentName: req.body.studentName,
        subjects: req.body.subjects,
    };
    console.log(student);

    Student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: `${err} Some Error occured in creating a new student  ` });
        })
}


// // find all the students 

// exports.findAll = (req, res) => {

// }

// // update student 

// exports.update = (req, res) => {

// }

// // delete student 

// exports.delete = (req, res) => {

// }