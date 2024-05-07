const mongoose = require('mongoose')
const validator = require('mongoose-validator')
const bcrypt = require('bcrypt');
const { dbConnection } = require('../config/db');


const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: {
        type: String,
    },
    password: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique:true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema);
User.createIndexes();
module.exports = User;
