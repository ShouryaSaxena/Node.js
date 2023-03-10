
const express = require("express");
const path = require("path");
const port = 2200;

const router = require("./routes/reserve-routes.js");
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));  //body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs

app.use("/", router); // route to display our data   (internal Middleware)

//---------------------------------Establishing the MongoDB connection-----------------------------

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://Shourya:surya@restaurantapp.kkhpj8t.mongodb.net/reservations?retryWrites=true&w=majority"
).then(() => {
    app.listen(port, () => { console.log(`Reservation System listning at port ${port}`) });
}).catch((err) => {
    console.log("Error: Connection Failed...", err)
})


// // getting the restaurant data 
// const express = require("express");
// const mongoose = require("mongoose");
// const router = require("./routes/reserve-routes.js");
// const path = require("path");
// const app=express();
// const port = 2200;


// app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser
// app.use(express.urlencoded({extended:true}));

// app.use("/",router);
// mongoose.connect(
//     "mongodb+srv://Shourya:surya@restaurantapp.kkhpj8t.mongodb.net/reservations?retryWrites=true&w=majority"
// ).then(()=>{
//     app.listen(port,()=>{
//         console.log(`Reservation System Listning at ${port}`)
//     })
// }).catch((err)=>{
//     console.log(err);
// });