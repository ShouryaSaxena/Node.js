//creating routes from request and response of methods 
const express = require("express");
const router = express.Router();

const { displayForm, add_Student } = require("../Control/resultDataControl.js")


router.get("/student-form", displayForm);
router.post("/create", add_Student);

module.exports = router;