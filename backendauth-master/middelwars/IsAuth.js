var jwt = require('jsonwebtoken');

 const UserSchema = require('../model/user')


 exports.isAuth=async(req,res,next)=>{
    try{

        const token = req.header('Authorization')


        var decoded = jwt.verify(token,process.env.privateKey)

if(!decoded){return res.json({errors})}

const user = await UserSchema.findById(decoded.id)

req.user = user
next()
    }catch(err){
        console.log(err)
    }
 }
