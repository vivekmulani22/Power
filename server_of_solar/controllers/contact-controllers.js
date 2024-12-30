const Contact = require('../models/contact-model');

const contactForm = async (req, res) => {
   try {
    const response = await Contact.create(req.body);
    res.status(201).json({success: true, message: "Contact form submitted successfully", data: response});
   } catch (error) {
    res.status(500).json({success: false, message: "Failed to submit contact form", error: error.message});
   }
};

module.exports = { contactForm };
