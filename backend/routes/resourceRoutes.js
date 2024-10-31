import express from "express";
import { getVerbalResources, getQuantitativeResources, getWritingResources } from "../controllers/resourceController.js";

const router = express.Router();

router.get("/verbal", getVerbalResources);
router.get("/quantitative", getQuantitativeResources);
router.get("/writing", getWritingResources);

export default router;
