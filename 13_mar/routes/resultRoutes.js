// creating the route for controller
const student = require("../controllers/resultController");
const express = require("express");
const router = require("express").Router();


router.get("/student", student.displayForm);
router.post("/create",student.create);
router.get("/find", student.findAll);
router.post("/update", student.update);
router.post("/delete", student.delete);


module.exports = router;