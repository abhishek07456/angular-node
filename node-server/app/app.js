const express=require('express');
const cors = require('cors');
const bodyParse=require('body-parser');
const cookieParser=require('cookie-parser')
const {mongoose}=require('./config/database.js');
const router=require('./config/router.js');
var app=express();
app.use(bodyParse.json());
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
app.use('/',router);
app.use(cors({origin: 'localhost:4200'}));
app.listen(3000,()=>{
console.log("server started at port 3000");
});