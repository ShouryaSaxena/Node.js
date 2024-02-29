// creating the route for controller
const reservation = require("../controller/reserveController.js");

let router = require("express").Router();

//-----------------Performing CRUD Operations on database--------------------------------
router.get("/book-now", reservation.displayForm);
router.get("/display", reservation.show_bookings);
router.post("/reserve", reservation.create);
router.post("/deleteBooking", reservation.deleteBooking);

module.exports = router;