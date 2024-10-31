import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);  // Log authorization header

  if (!authHeader) {
    console.log("Authorization header missing");
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  console.log("Token received:", token);  // Log the extracted token

  if (!token) {
    console.log("Token missing");
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decoded successfully:", decoded);  // Log decoded token payload
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Invalid token:", error.message);  // Log any verification errors
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;



