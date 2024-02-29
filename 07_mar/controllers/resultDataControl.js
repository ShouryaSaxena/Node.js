// defining the controller methods 
const result = require("../model/resultData.js")

const displayForm = (req, res) => {
    res.render("result")
}

//---------------Displaying all the stored data from the database.-----------------------

const get_result = async (req, res) => {
    try {
        const results = await result.find();
        res.json(results);
    } catch (err) {
        res.json({ message: err });
    }
}

//---------------Adding data to the database-----------------------

const add_Student = async (req, res, next) => {
    console.log(req);
    const { studentName, rollno, subjects } = req.body;

    if (studentName?.trim() === "" && isNaN(rollno)) {
        return res.status(422).json({ message: "Error: Enter valid Data..." })
    }

    let resultData;
    try {
        resultData = new student({
            studentName,
            rollno,
            subjects
        });
        resultData.save();
        console.log(resultData);
    } catch (err) {
        return next(err);
    }

    if (!result) {
        res.status(500).json({ messgae: "Error: Couldn't save data..." })
    }

    return res.status(200).json({ resultData });
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
    updated = await student.findOneAndUpdate({rollno:rollno}, { studentName, subjects })
    console.log(updated);
    return res.status(200).json({ updated });
}


//---------------Deleting the stored data based on rollno.-----------------------

const deleteResult = async(req,res)=>{
    
    let {rollno} = req.body;
    console.log(rollno);
    let deleted;
    deleted = await student.deleteOne({rollno:rollno});
    console.log(deleted);
    return res.status(200).json({message:"Entry Deleted from the Database. "});
}


//-----------------Exporting various controle functions (api's) to other js files--------------

exports.add_Student = add_Student;
exports.get_result = get_result;
exports.displayForm = displayForm;
exports.updateResult = updateResult;
exports.deleteResult = deleteResult;