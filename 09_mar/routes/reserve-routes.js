//creating routes from request and response of methods 
const express = require("express");
const router = express.Router();

const { displayForm, show_bookings, deleteBooking, reserve} = require("../controllers/reserveDataControl")

//-----------------Performing CRUD Operations on database--------------------------------
router.get("/book-now", displayForm);
router.get("/showbookings", show_bookings);
router.post("/reserve", reserve);
router.post("/deleteBooking", deleteBooking);




module.exports = router;