
const express = require("express");
const path = require("path");
const port = 2200;

const router = require("./routes/reserve-routes.js");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));  //body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs
app.set("view engine", "ejs");
app.use("/", router); // route to display our data   (internal Middleware)

//---------------------------------Establishing the MongoDB connection-----------------------------

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://Shourya:surya@restaurantapp.kkhpj8t.mongodb.net/reservation?retryWrites=true&w=majority"
).then(() => {
    app.listen(port, () => { console.log(`Reservation System listning at port ${port}`) });
}).catch((err) => {
    console.log("Error: Connection Failed...", err)
})