import { Router } from "express";
import { getQuestion } from "../controllers/questionController.js";
import authMiddleware from '../utils/authMiddleware.js';

const router = Router();

router.get("/:section", getQuestion);
router.post('/submit', authMiddleware, submitAnswer);

export default router;
