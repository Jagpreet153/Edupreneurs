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

//const { auth } = require('../middleware/Auth');

const {logout} = require("../controller/logout")
router.get("/logout",logout);

const {codeGenerator} = require("../controller/codeGenerator")
router.post("/codeGenerator",codeGenerator);





module.exports=router;