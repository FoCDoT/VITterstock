const mongoose = require('mongoose');

const schema = mongoose.Schema;

const flag = new schema({
    photo:{
        type:'string'
        required:true
    },
    title:{
        type:'string',
        required:true
    },
    keywords:{
        type:'array'
        required: true
    },
    comments:{
        type:'array'
        default: [];
    },
    price:{
        type:'string'
        default: '0';
    },
    likes:{
        type:'number',
        default: 0;
    }
});

module.exports = mongoose.model('photo',flag);