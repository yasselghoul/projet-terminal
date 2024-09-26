const express = require('express')


const userRoutes = express.Router()

const {register,login,userUpdate,getAll}=require('../controlllers/user')
//middel 
const  {registerValidation,logvalidation,validation} = require('../middelwars/RegisterValidation')
//partie auth middel ware 
const {isAuth} = require('../middelwars/IsAuth')

//partie auth 


userRoutes.post('/register',registerValidation,validation,register)

//partie post login 


userRoutes.post('/login',logvalidation,validation,login)


userRoutes.put('/update/:id',isAuth,userUpdate)


userRoutes.get('/uracount',isAuth,(req,res)=>{
    res.send(req.user)

})

userRoutes.get('/all',getAll)




module.exports= userRoutes