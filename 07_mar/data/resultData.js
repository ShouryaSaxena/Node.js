// creating the model/ schema for the student 
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let resultSchema = new Schema({
    studentName:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    }
});

module.exports= mongoose.model("student",resultSchema);