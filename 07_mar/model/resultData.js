// creating the model/ schema for the student result 
const mongoose = require("mongoose");
let Schema = mongoose.Schema;


//----------------------------Defining the schema of the storing data-------------------------

let resultSchema = new Schema({
    studentName:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    subjects:{
        type: String,
        required: true
    }
});

//--------------------------Schema sent to Database collection----------------------------------

module.exports= mongoose.model("student",resultSchema);