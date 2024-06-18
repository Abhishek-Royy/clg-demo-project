const { z } = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(5, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name not more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(6, { message: "Email must be at least 6 characters" })
    .max(35, { message: "Email not more than 35 characters" }),
  phone: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(10, { message: "Phone not more than 10 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password not more than 32 characters" }),
});

module.exports = signUpSchema;
