const express=require('express');
const router=express.Router();
var {signup}=require('../model/signup.js');
const {mongoose}=require('../config/database.js');
const objectId=require('mongoose').Types.ObjectId;
const signup_post=(req,res)=>{
    var signup_obj=new signup();
        signup_obj.username=req.body.username;
        signup_obj.email=req.body.email;
        signup_obj.fname=req.body.fname;
        signup_obj.mname=req.body.mname;
        signup_obj.lname=req.body.lname;
        signup_obj.dob=req.body.dob;
        signup_obj.position=req.body.position;
        signup.findOne({$or:[{"username": signup_obj.username},{"email": signup_obj.email}]},(err,doc)=>{
                if(doc)
                res.send("username and email already exist");
                else
                {
                  signup_obj.save();
                  res.send(signup_obj);
                }
        });
}

const getAllUser=(req,res)=>{
   signup.find((err,doc)=>{
      if(err)
      console.log("problem to retrieve data");
      else
      res.send(doc)
   });
}
const get_by_id=(req,res)=>{
  id=req.params.id;
  // if(!objectId.isValid(id))
  // res.status(400).send("user name not found");
  signup.findById({"username":id},(err,doc)=>{
        if(doc)
        res.send(doc);
        else
        res.send("username not found");
      });
}
const user_update=(req,res)=>{
    id=req.params.id;
    const update={
    username : req.body.username,
    email :req.body.email,
    fname :req.body.fname,
    mname :req.body.mname,
    lname :req.body.lname,
    dob   :req.body.dob,
    position:req.body.position
    }
    signup.findOneAndUpdate({$or:[{"username":id},{"email":id}]},{$set:update},{new:true},(err,doc)=>{
       if(err)
       res.status(400).send("failed to update");
       else
       res.send(doc);
    });
}
const user_delete=(req,res)=>{
   id=req.params.id;
   signup.findOneAndRemove({$or:[{"username":id},{"email":id}]},(err,doc)=>{
      if(err)
      res.status(400).send("failed to delete");
      else
      res.send("user deleted successfully");
   });
}
module.exports={signup_post,getAllUser,get_by_id,user_update,user_delete};
