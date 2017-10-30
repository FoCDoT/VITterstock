const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const schema = mongoose.Schema;

const flag = new schema({
    username:{
        type:'string',
        required:true,
        unique:true
    },
    password:{
        type:'string'
    }
});

flag.methods.hashandsave = function(){
    this.password = bcrypt.hashSync(this.password);
    return this.save();
}

flag.statics.compare = function(username,password,cb){
    this.findOne({username:username},(err,result)=>{
        console.log(result);
        var bcrypt = require('bcrypt-nodejs');
        if(bcrypt.compareSync(password,result.password)){
            cb(null,"LoggedIn.",result);
        }
        else{
            cb("Invalid Username/Password.",null,null);
            console.log("incorrect username or password");
        }
    });
}

module.exports = mongoose.model('user',flag);