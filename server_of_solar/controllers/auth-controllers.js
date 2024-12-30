const User = require("../models/user-models");
const bcrypt = require("bcrypt");

const home = async (req, res, next) => {
  try {
    res.status(200).send("Welcome to the Register Auth-Router page");
  } catch (error) {
    next(error);
  }
};

//register
const register = async (req, res, next) => {
  try {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    // Input validation
    if (!email || !password || !confirmPassword || !firstName || !lastName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Password strength validation
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreated = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const token = await userCreated.generateToken();

    res.status(201).json({
      message: "User created successfully",
      token,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

//login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if the user exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    
    if (isPasswordValid) {
      const token = await userExists.generateToken();
      
      res.status(200).json({
        message: "Login successful",
        token,
        userId: userExists._id.toString(),
        isAdmin: userExists.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    next(error);
  }
};

// user
const user = async (req, res, next) => {
  try {
    const userData = req.user;
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ userData });
  } catch (error) {
    next(error);
    console.error(`Error in user controller: ${error}`);
  }
};

module.exports = { home, register, login, user };
