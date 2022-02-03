const express=require('express')
const router=express.Router()
const {registrationValidation,validation,loginValudation}=require('../Middleware/validation')
const isAuth=require('../Middleware/isAuth')
/* const {authRole} =require('../Controllers/AuthController')
 */const { is } = require('express/lib/request')
const {postUser,getAllUsers,deleteUser,updateUser,getOneUser,ProfileIntervenantToUser,allIntervenantduclient}=require('../Controllers/UsersManagementControllers')
const { Mongoose } = require('mongoose')
const mongoose = require('mongoose')
const toId=  mongoose.Types.ObjectId

//need to auth as admin to access to those rotes
router.post('/user',postUser)
router.get('/user',getAllUsers,registrationValidation,validation)
router.delete('/user/:id',deleteUser)
router.put('/user/:id',updateUser)
router.get('/user/:id',getOneUser)



module.exports=router