const express=require('express')
const router=express.Router()
const {registrationValidation,validation,loginValudation}=require('../Middleware/validation')
const isAuth=require('../Middleware/isAuth')
const { is } = require('express/lib/request')
const {postAdmin, getAllAdmins ,deleteAdmin,updateAdmin,getOneAdmin,ProfileIntervenantToUser,allIntervenantduclient}=require('../Controllers/AdminController')
const {authRole} =require('../Controllers/AuthController')
const { Mongoose } = require('mongoose')



router.post('/admin',postAdmin,authRole)
router.get('/admin',getAllAdmins,authRole(0),registrationValidation,validation)
router.delete('/admin/:id',deleteAdmin,authRole(0))
router.put('/admin/:id',updateAdmin,authRole(0))
router.get('/admin/:id',getOneAdmin,authRole(0))



//exemple of admin page   test on it on postman
router.get("/adminPage",authRole("admin"),(req,res)=>{
    res.json({message:"welcome to the admin page"})
})


module.exports=router