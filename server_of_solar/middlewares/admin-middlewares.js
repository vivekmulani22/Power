const adminMiddleware = async (req, res, next) => {
    try {
        // Check if user exists and has admin privileges
        if (!req.user) {
            return res.status(402).json({
                success: false,
                message: "Unauthorized - User not found"
            });
        }

        if (!req.user.isAdmin) {
            return res.status(403).json({
                success: false, 
                message: "Forbidden - Admin access required"
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = adminMiddleware;