const User = require('../models/user.js');
const express = require('express');
const router = express.Router();

router.post('/create',(req,res)=>{
    console.log(req.body);
    if(req.body.password != req.body.confirmpassword){
        console.log("Invalid Details.");
        return res.end('Invalid Details');
    }
    User.create({username:req.body.username},(err,user)=>{
        if(err){
            console.log(err);
        }
        user.password = req.body.password;
        user.hashandsave().then((msg)=>{
            req.session.user = user;
            console.log(user);
            console.log('User Created.')
        }).catch((err)=>{
            console.log('Cannot Create.');
        });
    });
});
router.post('/login',(req,res)=>{
   User.compare(req.body.username,req.body.password, (err,res,user)=>{
    if(err){
        console.log("Cannot Login.");
    }
    else{
        req.session.authenticated = true;
        req.session.user = user;
        console.log("LoggedIn.");
    }
   });
});

router.get('/logout',(req,res)=>{

    if(req.session.authenticated){
        delete req.session.authenticated;
        delete req.session.user;
    }
    console.log("Logged Out.");
});

module.exports = router;