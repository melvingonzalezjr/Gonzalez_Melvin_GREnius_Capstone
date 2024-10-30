import User from "../models/user.js";
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import dotenv from "dotenv";
dotenv.config();

export async function register(req, res) {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

/*
login function for users signing in. 
*/
export async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await findOne({ username });
    //if user not found or the input password and stored password  do not match, return 401 error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    //if login info correct, we create a JSON Web Token for security (good for 1 day)
    //we keep that token 
    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
