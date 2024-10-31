import User from "../models/user.js";
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";

/*
creating a user.
*/
export async function register(req, res) {
  const { email, password } = req.body;
  //ensure we have email and password
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    //Apply hash to password so it's safe
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

/*
login function for users signing in. 
*/
export async function login(req, res) {
  //doublchecking my token
  console.log("JWT Secret used for token generation:", process.env.JWT_SECRET); // Debugging line

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log("User found:", user);  // Log the user document

    // If user not found or the password comparison fails
    if (!user) {
      console.log("No user found with that email");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("Password from request:", password);  // Logs plain text password from request
    console.log("Stored hashed password:", user.password);  // Logs hashed password from DB

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);  // Log result of password comparison

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);  // Log any other errors
    res.status(400).json({ error: error.message });
  }
}
