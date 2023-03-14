
//-------------------------------Restaurant Reservation API-------------------------------------

const express = require("express");
const path = require("path");
const router = require("./route/reserveRoutes.js")
const db = require("./model");
const port = 3000;
db.sequelize.sync();

const app =express();

app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser
app.use(express.urlencoded({extended:true}));

app.use("/", router);

app.listen(port, () => {
    console.log(`Reservation API Listening on PORT: ${port}`);
});