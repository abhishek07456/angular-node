const mongoose=require('mongoose');
const signup_schema=new mongoose.Schema({
    username:String,
    email:String,
    fname:String,
    mname:String,
    lname:String,
    dob:String,
    position:String
});
const signup=mongoose.model('signup',signup_schema);
module.exports={signup};