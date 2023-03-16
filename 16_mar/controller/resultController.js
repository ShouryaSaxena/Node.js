// exporting the student model 
const db = require("../model");
const path = require("path")

// importing the sequelized model
const Student = db.result;

const Op = db.Sequelize.Op;      // for using the operators of sql


// creating a new student 

exports.create =(req,res)=>{
    if(!req.body.studentName){
        res.status(400).json({message:"name cannot be  empty "});
    }
    const imgName = req.file.filename;

    const student = {
        rollno:req.body.rollno,
        studentName: req.body.studentName,
        subjects:req.body.subjects,
        img:imgName,
    };
    console.log(student);

    Student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({message:`${err} Some Error occured in creating a new result.  `});
        })
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
    const id = req.body.rollno;
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
    const roll_number = req.body.rollno;
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