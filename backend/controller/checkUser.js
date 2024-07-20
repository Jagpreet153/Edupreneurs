const user = require("../model/user") 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.checkUser=async (req,res)=>{

    const JWT_SECRET=process.env.JWT_SECRET
    let email= req.body.email;
    let password= req.body.password;
    try{
        
        let item= await user.findOne({email:email})

        if(!item){
            return res.status(404).json({
                success: false,
                message : "Invalid Email or password"
            })
        }
        else
        {
            const payload={
                email:item.email,
                id:item._id,
                name:item.name,
                role:item.role
                }
                if(await bcrypt.compare(password, item.password))
                {
                    let token = jwt.sign(payload,
                        process.env.JWT_SECRET,
                        {
                            expiresIn:"2h"
                        });
                    item=item.toObject()
                    item.token=token;
                    item.password=undefined  

                    const options={
                        expires:new Date(Date.now() + 3*24*60*60*1000),
                        httpOnly:true
                    }

                    res.cookie("token" , token , options).status(200).json({
                        success:true,
                        item,
                        token,
                        name:item.name,
                        message:"User loged in successfully" 
                    })


                }
                else{
                    return res.status(403).json({
                        success:false,
                        message:"Enter valid password"
                    }
                )}
        }
    }

    catch(err){
        console.error()
        res.status(500).json({
            success:false,
           error:err.message,
           message:"Server Error"

        })
    }
}