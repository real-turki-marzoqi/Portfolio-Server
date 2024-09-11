const mongoose = require('mongoose');

const personalInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [50, 'Too long Name'],
        minlength:[3,'Too short name'],
        
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        
    },
    number: {
        type: String,
        required: [true, 'Number is required'],
        trim: true
    },   
}, {
    timestamps: true 
});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
