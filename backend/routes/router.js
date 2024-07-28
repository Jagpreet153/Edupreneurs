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

// const { auth } = require('../middleware/Auth');

const {logout} = require("../controller/logout")
router.get("/logout",logout);

const {createClass} = require("../controller/createClass")
router.post("/createClass",createClass);

const {editProfile} = require("../controller/editProfile")
router.put("/editProfile",editProfile);

const {checkClasscode} = require("../controller/checkClasscode")
router.post("/checkClasscode",checkClasscode);





module.exports=router;