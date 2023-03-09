// defining the controller methods 
const user = require("../model/reserveData.js")

const displayForm = (req, res) => {
    res.render("restaurant")
}

//---------------Displaying all the stored data from the database.-----------------------

const show_bookings = async (req, res) => {
    try {
        const reservation = await user.find();
        res.json(reservation);
    } catch (err) {
        res.json({ message: err });
    }
}

//---------------Adding data to the database-----------------------

const reserve = async (req, res, next) => {
    console.log(req);
    const { Name, date, table } = req.body;

    if (Name?.trim() === "" && date === "" && table === "") {
        return res.status(422).json({ message: "Error: Enter valid Data..." })
    }

    let reserveData;
    try {
        reserveData = new user({
            Name,
            date,
            table
        });
        reserveData.save();
        console.log(reserveData);
    } catch (err) {
        return next(err);
    }

    if (!user) {
        res.status(500).json({ messgae: "Error: Couldn't save data..." })
    }

    return res.status(200).json({ reserveData });
}



//---------------Deleting the stored data based on rollno.-----------------------

// const deleteResult = async(req,res)=>{
    
//     let {rollno} = req.body;
//     console.log(rollno);
//     let deleted;
//     deleted = await student.deleteOne({rollno:rollno});
//     console.log(deleted);
//     return res.status(200).json({message:"Entry Deleted from the Database. "});
// }


//-----------------Exporting various controle functions (api's) to other js files--------------

exports.show_bookings = show_bookings;
exports.reserve = reserve;
exports.displayForm = displayForm;
