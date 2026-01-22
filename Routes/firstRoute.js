// const express=require('express')
// const FirstController=require("../Controllers/firstController")
// const route = express.Router();
// route.get('/get-data',FirstController.TestingAPI)
// module.exports=route;

// const express = require('express');
// const firstController = require('../Controllers/firstController');
// const router = express.Router();
// // router.get('/get-data', FirstController.TestingAPI);
// router.get('/get-data', firstController.GetData);
// module.exports = router;

const express = require('express');
const route = express.Router();
const { VerifyEncryption,Encryption, UploadFile } = require("../Controllers/firstController");
const multer = require('multer');
const path = require('path');

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const FileFilters = (req, file, cb) => {
    const allowedTypes = /png|jpg|jpeg|svg/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file format"));
    }
};

const Upload = multer({
    storage: Storage,
    fileFilter: FileFilters,
    limits: {
        fileSize: 1024 * 1024 * 2 // 2MB
    }
});

route.post("/encrypt-password", Encryption);
route.post("/verify-password", VerifyEncryption);
route.post("/file-upload", Upload.array('file', 3), UploadFile);

module.exports = route;
