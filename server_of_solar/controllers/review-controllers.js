const Review = require('../models/review-model');

// Create a new review
const createReview = async (req, res) => {
    try {
        const response = await Review.create(req.body);
        console.log(response);
        
        res.status(201).json({
            success: true, 
            message: "Review created successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create review",
            error: error.message
        });
    }
};

// Get all reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json({
            success: true,
            message: "Reviews fetched successfully",
            data: reviews
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch reviews",
            error: error.message
        });
    }
};

module.exports = { createReview, getAllReviews };
