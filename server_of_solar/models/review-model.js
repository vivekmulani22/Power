const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating cannot exceed 5"]
    },
    fullname: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 20
    },
    comment: {
        type: String,
        required: [true, "Review comment is required"],
        trim: true,
        minLength: [10, "Comment must be at least 10 characters"],
        maxLength: [500, "Comment cannot exceed 500 characters"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
