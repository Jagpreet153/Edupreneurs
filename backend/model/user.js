

const mongoose = require('mongoose');
const classDetail = new mongoose.Schema({
  className: {
    type: String,
   default: null
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
   default: null
  },
  maxStudents: {
    type: Number,
   default: null
  },
  parent: {
    type: Boolean,
    default: null,
  },
  amount: {
    type: Number,
   default: null
  },
  role:{
    type:String,
    default:null
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  code: {
    type: String,
    default: null
  },
}, { _id: false });


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
      gender: {
        type: String,
        default: null
      },
      dob: {
        type: String,
        default: null
      },
      classes: [classDetail] 

}

module.exports = mongoose.model("User",userSchema)