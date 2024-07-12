const user = require("../model/user")   // Importing todo 
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken') 
exports.createUser=async(req,res)=>{   // Async function is applied as it will wait for data

const JWT_SECRET=process.env.JWT_SECRET
  try{

      const {name,email,password} = req.body;

      let hashedPass;
      hashedPass=await bcrypt.hash(password,10)
      const response= await user.create({
          name,email,password:hashedPass
      })

      res.status(200).json({
          success:true,
          data: response,
          message: "Entry created successfully"
  })
  }
  
  catch(err){
      console.error();
      console.log(err);
      res.status(500)
      .json({
              success : false,
              data: "internal server error",
              message:err.message,
          }
      )
  }
}