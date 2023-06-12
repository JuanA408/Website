const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
// This is what our user's collection going to have
// How data is going to be stored
const UserSchema = new Schema({
    name : {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    }, 

    date: {
        type: Date,
        default: Date.now
    }

});

// We need a schema in order to create a model like below

module.exports = User = mongoose.model('users', UserSchema)