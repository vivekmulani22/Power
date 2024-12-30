const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
        minLength: [3, "Full name must be at least 3 characters"],
        maxLength: [50, "Full name cannot exceed 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number']
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        trim: true,
        minLength: [10, "Message must be at least 10 characters"],
        maxLength: [1000, "Message cannot exceed 1000 characters"]
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
