import { verify } from "jsonwebtoken";
require("dotenv").config();

//middleware function verifies the user token anytime we fetch quiz questions to ensure user is seeing questions they have access to.
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;
