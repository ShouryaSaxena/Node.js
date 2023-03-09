// defining the controller methods 
const resData = require("../data/resultData.js")

const displayForm = (req, res) => {
    res.render("result")
}

// adding a new student to database
const add_Student = async (req, res, next) => {
    console.log(req);
    const { studentName, rollno } = req.body;

    if (studentName?.trim() === "" && isNaN(rollno)) {
        return res.status(422).json({ message: "Error: Enter valid Data..." })
    }

    let resultData;
    try {
        resultData = new resData({
            studentName,
            rollno,
        });
        console.log(resultData);
    } catch (err) {
        return next(err);
    }

    if (!resData) {
        res.status(500).json({ messgae: "Error: Couldn't save data..." })
    }

    return res.status(200).json({ resultData });
}

exports.add_Student = add_Student;
exports.displayForm = displayForm;