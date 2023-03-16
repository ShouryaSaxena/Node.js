//creating routes from request and response of methods 
const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer.js')

const { displayForm, add_Student, get_result, updateResult, deleteResult } = require("../controllers/resultDataControl")

//-----------------Performing CRUD Operations on database--------------------------------


router.get("/student", displayForm);
router.get("/getresult", get_result);
router.post("/create", upload, add_Student);
router.post("/updateData", updateResult);
router.post("/deleteResult", deleteResult);





module.exports = router;