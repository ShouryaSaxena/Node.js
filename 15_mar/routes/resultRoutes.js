//creating routes from request and response of methods 
const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer.js')

const controller = require("../controllers/resultDataControl")

//-----------------Performing CRUD Operations on database--------------------------------


router.get("/student", controller.displayForm);
router.get("/getresult",controller.get_result);
router.get("/:id", controller.findByID)
router.post("/create", upload.single("myImage"), controller.add_Student);
router.post("/updateData",upload.single("myImage"), controller.updateResult);
router.post("/deleteResult", controller.deleteResult);





module.exports = router;