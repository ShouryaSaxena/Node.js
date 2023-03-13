// defining the controller methods 
const user = require("../model/reserveData.js")
const router = require("../routes/reserve-routes.js")

const displayForm = (req, res) => {
    res.sendFile("C:/Users/ShouryaSaxena/Node.js/09_mar/public/restaurant.html")
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
    const { Name, mobile, date, table } = req.body;
    let findUser = null;
    findUser = await user.findOne({ mobile: mobile });
    if (Name?.trim() === "" || isNaN(mobile) || date === "" || table === "") {
        return res.status(422).json({ message: "Error: Enter valid Data..." })
    }

    else if (findUser != null) {
        return false;
    }

    else {
        let reserveData;
        try {
            reserveData = new user({
                Name,
                mobile,
                date,
                table
            });
            reserveData.save();
            console.log(reserveData);
        } catch (err) {
            return false;
        }

        if (!user) {
            res.status(500).json({ messgae: "Error: Couldn't save data..." })
        }

        return false;
    }
}




//---------------Deleting the stored data based on rollno.-----------------------

const deleteBooking = async (req, res) => {

    let { mobile } = req.body;
    console.log(mobile);
    let deleted;
    deleted = await user.deleteOne({ mobile: mobile });
    console.log(deleted);
    return false;
}


//-----------------Exporting various controle functions (api's) to other js files--------------

exports.show_bookings = show_bookings;
exports.reserve = reserve;
exports.displayForm = displayForm;
exports.deleteBooking = deleteBooking;