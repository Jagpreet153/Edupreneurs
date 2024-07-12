const express = require('express');

const router=express.Router();

const {createUser} = require("../controller/createUser")
router.post("/createUser" , createUser);

const {checkUser} = require("../controller/checkUser")
router.post("/checkUser" , checkUser);

const {duplicateUser} = require("../controller/duplicateUser")
router.post("/duplicateUser" , duplicateUser);

module.exports=router;