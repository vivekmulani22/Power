const errorMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || "Backend error";
    const extraDetails = err.extraDetails || "Error in backend";
    
    return res.status(statusCode).json({ message, extraDetails });
};

const loginErrorMiddleware = (err, req, res, next) => {
    if (err.message === "Invalid Credentials") {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    next(err);
};

module.exports = { loginErrorMiddleware, errorMiddleware };