const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName :{
        type:'string',
        required:true
    },
    email:{
        type:'string',
        required:true
    },
    password:{
        type:'string',
        required:true
    }
})

module.exports = mongoose.model('mySchema', UserSchema)