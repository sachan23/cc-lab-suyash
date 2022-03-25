const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    dob: Date,
    contact: String,
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


const marks = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    markst1: Number,
    markst2: Number,
    marksF: Number,

}, {
    timestamps: true
})

const Suyash_111915130 =  mongoose.model('Suyash_111915130', userSchema);
const Marks =  mongoose.model('Marks', marks);
module.exports = {Suyash_111915130,Marks};