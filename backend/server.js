import express from "express";
import { json } from "body-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

const app = express();
connectDB();

app.use(json());
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
