const User = require("../models/user-models");
const Contact = require("../models/contact-model");
const Review = require("../models/review-model");

// user logic
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

// contact logic
const getAllContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    res.status(200).json({ contacts });
  } catch (error) {
    next(error);
  }
};

// review logic
const getAllReview = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    console.log(reviews);
    
    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found" });
    }
    res.status(200).json({ reviews });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getAllContact, getAllReview };
