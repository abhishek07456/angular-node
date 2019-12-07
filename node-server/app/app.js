const express=require('express');
const bodyParse=require('body-parser');
const cookieParser=require('cookie-parser')
const {mongoose}=require('./config/database.js');
const router=require('./config/router.js');
var app=express();
app.use(bodyParse.json());
app.use(cookieParser());

app.use('/',router);
app.listen(3000,()=>{
console.log("server started at port 3000");
});