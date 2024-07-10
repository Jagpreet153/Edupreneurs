const user = require("../model/user")   // Importing todo 
const bcrypt =require('bcrypt')
exports.createUser=async(req,res)=>{   // Async function is applied as it will wait for data

    // const existUser=await User.findOne({email});

    //     if(existUser)
    //     {
    //         return res.status(400).json({
    //             success: false,
    //             message:"User Already exist"
    //         })
    //     }
  try{

      // extract title and description from request 
      const {name,email,password} = req.body;

      // create object of todo and insert in db
     // const response =await user.create({name,email,password});

      // send a json response with success flag

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