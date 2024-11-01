import express from "express";
import connectDB from "./config/db.mjs";
import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";
import schoolRoutes from "./routes/schoolRoutes.js";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/resources", resourceRoutes);
app.use('/api/schools', schoolRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
