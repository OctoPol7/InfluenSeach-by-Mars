const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    
    userType: {
        type: [{type: String}],
        enum: ["lite", "standard", "pro"],
        require: true
    },
    userName: {
        type: String,
        minlength: 1,
        maxlength: 30,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        minlength: 8,
        require: true
    },
    reconfirmPassword: {
        type: String,
        minlength: 8,
        require: true
    }
    
})

exports.User = mongoose.model('User', UserSchema)