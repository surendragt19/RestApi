const express=require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const userRouter=require('./router/userController')
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(userRouter);


mongoose.connect(process.env.URL)
.then(()=>{
    console.log("Mongoose is connect on localhost")
    app.listen(process.env.PORT || 8080,()=>{
        console.log(`The Server is run on Port : ${process.env.PORT}`)
    })
    
})
.catch((er)=>{
    console.log("eroor",er)
})



