const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({

    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    datingGender: {
        type: String,
        required: true
    },
    profileBio: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        immutable: true,
        default: Date.now
    }
});

module.exports = mongoose.model('profile', profileSchema)