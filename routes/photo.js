const Photo = require('../models/photo.js');
const express = require('express');
const base = '/images';
const router = express.Router;

router.post('/add',(req,res)=>{
    Photo.create({title:req.body.title},(err,result)=>{
        result.photo = base+result.title;
    });
});