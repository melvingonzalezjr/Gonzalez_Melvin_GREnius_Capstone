import express from "express";
import pkg from 'body-parser';
const { json } = pkg;
import connectDB from "./config/db.mjs";
import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

const app = express();
connectDB();

app.use(json());
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
