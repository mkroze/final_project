const mongoose = require('mongoose');

const FishSchema = new mongoose.Schema({
    image:{
        type: String,
        required: [true, 'Please enter a name'],
    },
    family:{
        type: String,
        required: [true, 'Please enter a name'],
    },
    name:{
        type: String,
        required: [true, 'Please enter a name'],
    },
    size:{
        type: String,
        required: [true, 'Please enter a description'],
    },
    howToCatch:{
        type: Array,
        required: [true, 'Please enter a Price'],
    },
    habitat:{
        type: String,
        required: [true, 'Please enter a name'],
        
    },
})

module.exports = mongoose.models.Fish || mongoose.model("Fish", FishSchema);