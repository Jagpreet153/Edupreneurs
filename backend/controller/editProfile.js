const User = require("../model/user") 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.editProfile=async (req,res)=>{

    const JWT_SECRET=process.env.JWT_SECRET
    let email= req.body.email
    let name = req.body.name
    let dob = req.body.dob
    let gender = req.body.gender

    // const verifyToken = (req, res, next) => {
    //     const token = req.header('Authorization');
    //     if (!token) return res.status(401).json({ error: 'Access denied' });
      
    //     try {
    //       const verified = jwt.verify(token, JWT_SECRET);
    //       req.user = verified;
    //       next();
    //     } catch (error) {
    //       res.status(400).json({ error: 'Invalid token' });
    //     }
    //   };

      
   try {

    // Find the user
    const user = await User.findOne({email:email});
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update allowed fields
    if (name) user.name = name;
    if (gender) user.gender = gender;
    if (dob) user.dob = dob;
        // Add logic for updating other fields

    // Save the updated user
    await user.save();

    const payload={
        email:user.email,
        id:user._id,
        name:user.name,
        role:user.role,
        gender:user.gender,
        dob:user.dob

        }
         let token = jwt.sign(payload,
                process.env.JWT_SECRET,
                {
                    expiresIn:"2h"
                });
            // user=user.toObject()
            user.token=token; 
            const options={
                expires:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }

            res.cookie("token" , token , options).status(200).json({
                success:true,
                user,
                token,
                name:user.name,
                message:"Profile Edited" 
            }
        )
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }


