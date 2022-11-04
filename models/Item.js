const mongoose= require('mongoose');

const ItemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter a name'],
    },
    description:{
        type: String,
        required: [true, 'Please enter a description'],
    },
    price:{
        type: Number,
        required: [true, 'Please enter a Price'],
    },
    image:{
        type: String,
        required: true,
    }
    
    
})

module.exports = mongoose.models.Item || mongoose.model("Item", ItemSchema);