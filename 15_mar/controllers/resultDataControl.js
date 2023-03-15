// defining the controller methods 
const student = require("../model/resultData.js")
const path = require("path");
const upload = require("../middleware/multer.js")
const fs = require("fs");


const displayForm = (req, res) => {
    res.sendFile("C:/Users/ShouryaSaxena/Node.js/15_mar/public/result.html")
}

//---------------Displaying all the stored data from the database.-----------------------

const get_result = async (req, res) => {
    try {
        const results = await student.find() ;
        res.json(results);
    } catch (err) {
        res.json({ message: err });
    }
}

//---------------Adding data to the database-----------------------

const add_Student = async (req, res, next) => {
    console.log(req);
    const data = {
        studentName: req.body.studentName,
        rollno: req.body.rollno,
        subjects: req.body.subjects,
        img: {
            data: path.join("uploads/" + req.file.filename),
            contentType: 'image/*',
        }
    }

    if (!data.img || data.name?.trim() == "" || isNaN(data.rollno) || data.subjects?.trim() == "") {
        res.status(500).send({ message: "Invalid Data or Mising Data " });
    }
    console.log(data.studentName)
    await student.create(data)
        .then(data => {
            res.status(200).send({ message: "Submitted and Uploaded" });
        })
        .catch(err => {
            console.log(err)
            res.send({ message: err })
        })
}

//---------------Updating the stored data based on rollno.-----------------------

const updateResult = async (req, res) => {
    console.log(req);
    let { studentName, rollno, subjects } = req.body;
    console.log(rollno);
    if (studentName?.trim() === "" && isNaN(rollno) && subjects.length === 0) {
        return res.status(422).json({ message: "Error: Enter valid data..." })
    }
    let updated;
    updated = await student.findOneAndUpdate({ rollno: rollno }, { studentName, subjects })
    console.log(updated);
    return res.status(200).json({ updated });
}


//---------------Deleting the stored data based on rollno.-----------------------

const deleteResult = async (req, res) => {

    let { rollno } = req.body;
    console.log(rollno);
    let deleted;
    deleted = await student.deleteOne({ rollno: rollno });
    console.log(deleted);
    return res.status(200).json({ message: "Entry Deleted from the Database. " });
}


//-----------------Exporting various controle functions (api's) to other js files--------------

exports.add_Student = add_Student;
exports.get_result = get_result;
exports.displayForm = displayForm;
exports.updateResult = updateResult;
exports.deleteResult = deleteResult;