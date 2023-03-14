// exporting the student model 
const Results = require("../model/student.js");

// importing the sequelized model
const Student = Results.student;

const displayForm = (req, res) => {
    res.sendFile("C:/Users/ShouryaSaxena/Node.js/13_mar/public/index.html")
}

// creating a new student 

const create = async (req, res, next) => {
    console.log(req)
    
    console.log(req.body.studentName);
    if (!req.body.studentName) {
        res.status(400).json({ message: "name cannot be  empty " });
    }

    let student = {
        rollNo: req.body.rollNo,
        studentName: req.body.studentName,
        subjects: req.body.subjects,
    };
    console.log(student);

    Student.create(student)
        return res.status(200).json({student});
      
}


// find all the students 

exports.findAll =(req,res) => {
    
    Student.findAll()
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.status(500).send({message:`${err}`});
        })
}

// update student 

exports.update = (req,res) => {
    const id = req.body.rollNo;
    console.log(id);
    Student.update(req.body,{                          // promise returns true if updated 
        where:{rollno:id}
    })
    .then(data => {
        res.send({data});
    })
    .catch(err => {
        res.status(500).send({message:`${err}`});
    })
}

// delete student 

exports.delete = (req,res) => {
    const roll_number = req.body.rollNo;
    console.log(roll_number)
    Student.destroy({where:{roll_number}})
    .then(data =>{
        res.send({data});
    })
    .catch(err => {
        res.status(500).send({message:`${err} this is the error`});
    })
}

// deleting all data 

exports.deleteAll = (req,res) => {
    Student.destroy({
        where:{},
        truncate:false
    })
    .then(data =>{
        res.send({data});
    })
    .catch(err =>{
        req.send({message:`${err}`});
    })
    
}
exports.create = create
exports.displayForm = displayForm