const express = require('express');
const mongoose=require('mongoose')
const userModel= require('./model/user')
const cors=require('cors')

const app= express();
require("dotenv").config();

const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

const userRoutes = require('./routes/router')
app.use("/api/v2", userRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at port number ${PORT}`)
})

const dbConnect=require('./config/database')
dbConnect;

app.get('/',(req,res)=>{
        res.send("<h1>Hello to Signup Page</h1>")
})


