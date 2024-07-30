const user = require("../model/user") 
const bcrypt = require('bcrypt')

exports.duplicateUser=async (req,res)=>{

    let email= req.body.email;
    try {
        const existingUser = await user.findOne({email});
        
        if (existingUser) {
          return res.json({ exists: true, message: 'Email is already registered' });
        } else {
          return res.json({ exists: false, message: 'Email is available' });
        }
      } catch (error) {
        console.error('Error checking email:',error);
        res.status(500).json({ error: 'Server error' });
      }
}

