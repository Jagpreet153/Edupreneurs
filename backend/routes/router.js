const express = require('express');

const router=express.Router();

const {createUser} = require("../controller/createUser")
router.post("/createUser" , createUser);

const {checkUser} = require("../controller/checkUser")
router.post("/checkUser" , checkUser);

const {duplicateUser} = require("../controller/duplicateUser")
router.post("/duplicateUser" , duplicateUser);


const {getotp} = require("../controller/getotp")
router.post("/getotp" , getotp);

const {changePassword} = require("../controller/changePassword")
router.post("/changePassword" , changePassword);

// const {verifyOtp} = require("../controller/verifyOtp")
// router.post("/verifyOtp" , verifyOtp);

module.exports=router;