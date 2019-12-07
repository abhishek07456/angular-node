const express=require('express');
const router=express.Router();
const signup=require('../controller/signup.js');
router.post('/signup',signup.signup_post);
router.get('/signup',signup.signup_get);

module.exports=router;