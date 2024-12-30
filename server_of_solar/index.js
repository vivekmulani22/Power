require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRouter = require('./router/auth-router');
const contactRouter = require('./router/contact-router');
const connectDB = require('./utils/db');
const { errorMiddleware, loginErrorMiddleware } = require('./middlewares/erorr-middlewarers');
const reviewRouter = require('./router/review-router');
const adminRouter = require('./router/admin-router');

const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
    credentials: true
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());
// Routes
app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);
app.use('/api/review', reviewRouter);
app.use('/api/admin', adminRouter);
// Error handling middleware
app.use(errorMiddleware);
app.use(loginErrorMiddleware);

// Start server
const PORT = 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
