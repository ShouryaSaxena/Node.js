
const express = require("express");
const path = require("path");
const port = 1010;

const router = require("./routes/resultRoutes.js");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));  //body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs
app.set("view engine", "ejs");

app.use("/", router); // route to display our data   (internal Middleware)

//---------------------------------Establishing the MongoDB connection-----------------------------

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://Yash:Hello1234@nodebase.79r8the.mongodb.net/nodeBase?retryWrites=true&w=majority"
).then(() => {
    app.listen(port, () => { console.log(`Result System listning at port ${port}`) });
}).catch((err) => {
    console.log("Error: Connection Failed...", err)
})