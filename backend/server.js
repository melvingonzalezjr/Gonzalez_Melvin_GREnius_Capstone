import express from "express";
import connectDB from "./config/db.mjs";
import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";
import dotenv from "dotenv";
import cors from 'cors';

app.use(cors());
dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/resources", resourceRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
