const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const user = require('./routes/user.js');

app.set('views',path.join(__dirname + '/views'));
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname + '/public')));
app.use(session({secret:'deathadder',saveUninitialized:true,resave:true}));

mongoose.Promise = global.Promise;

app.use('/user',user);

mongoose.connect('mongodb://localhost:27017/project',(err,db)=>{
    if(err){
        console.log("Couldn't connect to MongoDb.");
        process.exit(0);
    }
    console.log("Connected To MongoDb.");
});

app.listen(3000,(err,res)=>{
    if(err){
        console.log('Cannot Lift.');
        process.exit(0);
    }
    console.log('Listening On Port 3000.');
});