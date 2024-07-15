const mongoose = require('mongoose');
const userSchema ={
    name: {
        type: String,
        required : true,
    },

    email:{
        type: String,
        required : true,
        
    },

    password:{
      type:String,
      required:true
    },

    otp: {
        type: String,
        default: null
      },
      otpExpiration: {
        type: Date,
        default: null
      },
}

module.exports = mongoose.model("User",userSchema)