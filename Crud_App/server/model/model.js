const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phoneno : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    country : {
        type: String,
        required: true,
        unique: true
    },
    state : {
        type: String,
        required: true,
        unique: true
    },
    address : {
        type: String,
        required: true,
        unique: true
    },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;