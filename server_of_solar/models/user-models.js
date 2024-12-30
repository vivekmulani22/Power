const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024 // Increased for hashed password
    },
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // Add timestamps for createdAt and updatedAt
});

userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign(
            {
                id: this._id.toString(),
                email: this.email,
                firstName: this.firstName,
                lastName: this.lastName,
                isAdmin: this.isAdmin // Fixed: Reference this.isAdmin
            },
            process.env.JWT_SECRET,
            { 
                expiresIn: '24h', // Added reasonable expiration time
            }
        );
    } catch (error) {
        console.error('Token generation error:', error);
        throw new Error('Failed to generate authentication token');
    }
};

userSchema.methods.comparePassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Password comparison failed');
    }
};

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Add indexes for frequently queried fields
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
