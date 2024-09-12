const mongoose = require('mongoose');


const messagesSchema = mongoose.Schema({
    SenderName: { 
        type: String, 
        required: [true, 'name is required'], 
    },
    title: { 
        type: String, 
        required: [true, 'your title is required'], 
        trim: true, 
       },
    senderEmail: { 
        type: String, 
        required: [true, 'your email is required'], 
        trim: true, 
        lowercase: true, 
    },
    messageContent: { 
        type: String, 
        required: [true, 'Message content is required'], 
    },
}, 
{
    timestamps: { createdAt: 'createdDate' }
});

module.exports = mongoose.model('Messages', messagesSchema);
