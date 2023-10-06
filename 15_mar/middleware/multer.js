const multer = require('multer')
const path = require('path')
const fs = require("fs");

//---------------------------------Specifying storage for uploading image-----------------------------

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null,  Date.now() + '-' + file.originalname);
    }
});

//----------Init Upload----------

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        alert("'Error: Images Only!'");
        return false;
    }
}

module.exports = upload;