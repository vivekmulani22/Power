const express = require('express');
const { getAllReviews, createReview } = require('../controllers/review-controllers');
const router = express.Router();

router.post('/add', createReview);
router.get('/get', getAllReviews);

module.exports = router;