const express=require('express');
const router=express.Router();
const signup=require('../controller/signup.js');
router.post('/signup',signup.signup_post);
router.get('/getUsers',signup.getAllUser);
router.get('/getUser/:id',signup.get_by_id);
router.put('/updateUser/:id',signup.user_update);
router.delete('/deleteUser/:id',signup.user_delete);

module.exports=router;