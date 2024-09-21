import express, { Router } from "express";
import Cab from "../models/cabstate.model.js";
import { getCabs, createCab, updateCab, deleteCab } from "../controllers/cabstate.controller.js";

const router = express.Router();

router.get("/", getCabs);
router.post("/", createCab);
router.put("/:id", updateCab);
router.delete("/:id", deleteCab);

export default router;
