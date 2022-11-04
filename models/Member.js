const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Please enter a name'],
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: [true, 'Please enter a description'],
        unique: true,        
    },
    password:{
        type: String,
        required: [true, 'Please enter a Price'],
        
    },
})

module.exports = mongoose.models.Member || mongoose.model("Member", MemberSchema);