
const express = require("express");
const path = require("path");
const port = 2200;

const router = require("./routes/reserve-routes.js");
const app = express();

app.use(express.static(path.join(__dirname,'public')));  // Middleware to join the static files of public directory.
app.use(express.urlencoded({ extended: true }));  //body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs

app.use("/", router); // route to display our data   (internal Middleware)


//---------------------------------Connecting with the MongoDB Database-----------------------------

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://Shourya:surya@restaurantapp.kkhpj8t.mongodb.net/reservations?retryWrites=true&w=majority"
).then(() => {
    app.listen(port, () => { console.log(`Reservation System listning at port ${port}`) });
}).catch((err) => {
    console.log("Error: Connection Failed...", err)
})
