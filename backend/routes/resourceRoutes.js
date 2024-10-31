import express from "express";
import { getVerbalResources, getQuantitativeResources, getWritingResources, getGeneralResources } from "../controllers/resourceController.js";

const router = express.Router();

router.get("/general", getGeneralResources);
router.get("/verbal", getVerbalResources);
router.get("/quantitative", getQuantitativeResources);
router.get("/writing", getWritingResources);

export default router;
