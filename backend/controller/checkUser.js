const user = require("../model/user") 
const bcrypt = require('bcrypt')

exports.checkUser=async (req,res)=>{

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
            if(await bcrypt.compare(password,item.password)){
                res.status(200).json({
                    success: true,
                    data:item,
                
                })
            }

            else{
                return res.status(404).json({
                    success: false,
                    message : "Invalid email or password"
                })
            }
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