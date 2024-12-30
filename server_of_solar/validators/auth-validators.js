const { z } = require("zod");

const signupSchema = z.object({
    firstName: z
        .string({ required_error: "First name is required" })
        .trim()
        .min(3, { message: "First name must be at least 3 characters long" })
        .max(20, { message: "First name must be at most 20 characters long" }),

    lastName: z
        .string({ required_error: "Last name is required" })
        .trim()
        .min(3, { message: "Last name must be at least 3 characters long" })
        .max(20, { message: "Last name must be at most 20 characters long" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters long" })
        .max(255, { message: "Email must be at most 255 characters long" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" }),

    confirmPassword: z
        .string({ required_error: "Confirm password is required" })
        .trim()
        .min(8, { message: "Confirm password must be at least 8 characters long" })
        .max(20, { message: "Confirm password must be at most 20 characters long" })
});

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters long" })
        .max(255, { message: "Email must be at most 255 characters long" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" })
});

module.exports = { signupSchema, loginSchema };
