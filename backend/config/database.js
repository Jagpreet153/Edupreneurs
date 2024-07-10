const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect=() =>{
    mongoose.connect(process.env.DATABASE_URL,{
        
    })
    
.then(()=> console.log("Server Connected"))

.catch((err)=>{
    console.log("Error Occured")
    console.error(err.message)
    process.exit(1)
})
}

module.exports=dbConnect();