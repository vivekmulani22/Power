const jwt = require('jsonwebtoken');
const User = require('../models/user-models');

const authMiddleware = async (req, res, next) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.Authorization || req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                success: false,
                message: "Unauthorized - No token provided" 
            });
        }

        // Extract token without "Bearer " prefix
        const token = authHeader.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        // Get user data without password
        const userData = await User.findById(decoded._id).select('-password');
        if (!userData) {
            return res.status(401).json({
                success: false, 
                message: "Unauthorized - User not found"
            });
        }

        // Attach user info to request object
        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        req.isAdmin = userData.isAdmin;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized - Invalid token"
        });
    }
};

module.exports = authMiddleware;