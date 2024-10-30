import { Router } from "express";
import { getQuestion } from "../controllers/questionController";

const router = Router();

router.get("/:section", getQuestion);

export default router;
