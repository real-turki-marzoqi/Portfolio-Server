const mongoose = require('mongoose');


const textsSchema = new mongoose.Schema({
    AboutMe: {
        type: String,
        trim: true,
       
    },
    Education: {
        type: String,
        trim: true,
       
    },
    Services: {
        type: String,
        trim: true,
       
    }
}, {
    timestamps: true 
});


module.exports = mongoose.model('Texts', textsSchema);
