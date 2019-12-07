const express=require('express');
const router=express.Router();
var {signup}=require('../model/signup.js');
const {mongoose}=require('../config/database.js');
const signup_post=(req,res)=>{
    var signup_obj=new signup();
        signup_obj.username=req.body.username;
        signup_obj.fname=req.body.fname;
        signup_obj.mname=req.body.mname;
        signup_obj.mname=req.body.lname;
        signup_obj.dob=req.body.dob;
        signup_obj.position=req.body.position;
        signup_obj.save();
        res.send(signup_obj);
}

// router.get('/signup',(req,res)=>{
//     res.send("helo");
// })
const signup_get=(req,res)=>{
   signup.find((err,doc)=>{
      if(err)
      console.log("problem to retrive data");
      else
      res.send(doc)
   });
}
module.exports={signup_post,signup_get};
