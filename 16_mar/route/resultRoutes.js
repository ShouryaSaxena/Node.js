// creating the route for controller
const student = require("../controller/resultController.js");
const upload = require('../middleware/multer.js')

let router = require("express").Router();

router.post("/create",upload.single("myImage"), student.create);
router.get("/getresult", student.findAll);
router.post("/updateData",upload.single("updateImg"), student.update);
router.post("/deleteResult", student.delete);

module.exports = router;