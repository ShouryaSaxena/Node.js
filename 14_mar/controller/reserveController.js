// exporting the student model 
const db = require("../model");

// importing the sequelized model
const Reserve = db.reserve;

const Op = db.Sequelize.Op;      // for using the operators of sql

//--------------------Displaying Form----------------------------

exports.displayForm = (req, res) => {
    res.sendFile("C:/Users/ShouryaSaxena/Node.js/14_mar/public/index.html")
}

// creating a new student 

exports.create = async  (req,res)=>{
    if(!req.body.Name){
        res.status(400).json({message:"name cannot be  empty "});
    }

    const reserved = {
        Name:req.body.Name,
        mobile: req.body.mobile,
        date:req.body.date,
        table_No:req.body.table,
    };
    console.log(reserved);

    await Reserve.create(reserved)
        .then(reserved => {
            console.log(reserved)
            return false;
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send({message:`${err} Some Error occured in creating a new Reservation.  `});
        })
        return false;
}


// displaying all the bookings 

exports.show_bookings =(req,res) => {
    Reserve.findAll()
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.status(500).send({message:`${err}`});
        })
}


// delete reservation 

exports.deleteBooking = (req,res) => {
    const mobile = req.body.mobile;
    console.log(mobile)
    Reserve.destroy({where:{mobile}})
    .then(data =>{
        return false;
    })
    .catch(err => {
        res.status(500).send({message:`${err} this is the error`});
    })
    return false;
}