const mongoose=require('mongoose');
var url='mongodb://localhost:27017/novouniverse';

mongoose.connect(url,(err)=>{
    if(!err)
    console.log("connected to database....");
    else
    console.log("failed to connect");
});

module.exports=mongoose;
