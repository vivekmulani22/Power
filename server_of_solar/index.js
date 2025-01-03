require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDB = require("./utils/db");
const {
  errorMiddleware,
  loginErrorMiddleware,
} = require("./middlewares/erorr-middlewarers");
const reviewRouter = require("./router/review-router");
const adminRouter = require("./router/admin-router");

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Auth-Token", "Origin"],
  optionsSuccessStatus: 200,
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());
// Routes
app.use("/auth", authRouter);
app.use("/form", contactRouter);
app.use("/review", reviewRouter);
app.use("/admin", adminRouter);
// Error handling middleware
app.use(errorMiddleware);
app.use(loginErrorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello Power of Solar");
});

// Start server
const PORT = 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
