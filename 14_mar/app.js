
const express = require("express");
const router = require("./routes/reserveRoutes.js")
const cors = require('cors');
const path = require('path')

const db = require("./model");
const app = express();

db.sequelize.sync();

let corsOptions = {
    origin:"http://localhost:4000"                   // setting up origin to 2000
};
app.use(cors(corsOptions));

app.use("/",router);

app.use(express.static(path.join((__dirname,"public"))));
app.use(express.urlencoded({extended:true}));


app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({message:"This is the Main Page"});
})

//---------------------------------Establishing the msSQL connection-----------------------------
const PORT = process.env.PORT || 4040
app.listen(PORT, () => { console.log(`Result System listning at port ${PORT}`) });



