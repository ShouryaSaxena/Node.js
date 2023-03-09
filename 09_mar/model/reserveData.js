// creating the model/ schema for the student result 
const mongoose = require("mongoose");
let Schema = mongoose.Schema;


//----------------------------Defining the schema of the storing data-------------------------

let reserveSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    table: {
        type: String,
        required: true
    }
});

//--------------------------Schema sent to Database collection----------------------------------

module.exports = mongoose.model("reservation", reserveSchema);