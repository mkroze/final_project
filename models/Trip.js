const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    img:{
        type: String,
        required: [true, 'Please enter a name'],
    },
    price:{
        type: String,
        required: [true, 'Please enter a description'],
    },
    destination:{
        type: String,
        required: [true, 'Please enter a destination'],
    },
    transport:{
        type: String,
        required: [true, 'Please enter a transport'],
    },
    duration:{
        type: String,
        required: [true, 'Please enter a duration'],
    },
    level:{
        type: String,
        required: [true, 'Please enter a Price'],
    },
    description:{
        type: String,
        required: [true, 'Please enter a Price'],
    }
    
})

module.exports = mongoose.models.Trip || mongoose.model("Trip", TripSchema);