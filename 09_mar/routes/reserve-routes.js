//creating routes from request and response of methods 
const express = require("express");
const router = express.Router();

const { displayForm, show_bookings, reserve} = require("../controllers/reserveDataControl")

//-----------------Performing CRUD Operations on database--------------------------------
router.get("/book-now", displayForm);
router.get("/showbookings", show_bookings);
router.post("/reserve", reserve);



module.exports = router;