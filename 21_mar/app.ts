/**
 * Required External Modules
 */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
const PORT = 7000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));  //body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs

app.use(express.static(path.join(__dirname , "public")))


app.get("/", (req, res) => {
    return res.sendFile("./index.html");
})



mongoose.connect(
    "mongodb+srv://Yash:Hello1234@nodebase.79r8the.mongodb.net/nodeBase?retryWrites=true&w=majority"
).then(() => {
    app.listen(PORT, () => {
        console.log(`Application Listening at http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.log("Error: Connection Failed...", err)
})