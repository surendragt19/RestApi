const mongoose = require('mongoose');
const express=require('express');
const User=require('../models/userModel')
const router=express.Router()




//Create
router.post('/', async (req,res)=>{
    const {name,email,age}=req.body;
    try {
        const userAdd= await User.create({
            name:name,    //R-bakend L->Frontend
            email:email,
            age:age
        }) 
        res.status(201).json(userAdd)
    } catch (error) {
        res.send(400).json({error:error.massage}) 
    }
})

//Get 
router.get('/',async (req,res)=>{
    try {
        const showAll=await User.find()
        res.status(200).json(showAll)
    } catch (error) {
        res.send(500).json({error:error.massage}) 
    }
})

//Get Single User
router.get('/:id',async (req,res)=>{
    const Id=req.params.id;
    try {
        const singleUser=await User.findById({_id:Id})
        res.status(200).json(singleUser)
    } catch (error) {
        res.send(500).json({error:error.massage}) 
    }
})

//Delete
router.delete('/:id',async (req,res)=>{
    const Id=req.params.id;
    try {
        const deleteUser=await User.findByIdAndDelete({_id:Id})
        res.status(200).json(deleteUser)
    } catch (error) {
        res.send(500).json({error:error.massage}) 
    }
})

//Update
router.patch('/:id',async (req,res)=>{
    const Id=req.params.id;
    const {name,email,age}=req.body;
    try {
        const updateUser=await User.findByIdAndUpdate(Id,req.body,{new:true})
        res.status(200).json(updateUser)
    } catch (error) {
        res.send(500).json({error:error.massage}) 
    }
})

module.exports=router;