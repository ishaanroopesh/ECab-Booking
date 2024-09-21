import express from "express";
import {
	createRide,
	deleteRide,
	getParticularRide,
	getRides,
	updateRide,
} from "../controllers/ridestatus.controller.js";

const router = express.Router();

router.get("/", getRides);
router.get("/:id", getParticularRide);
router.post("/", createRide);
router.put("/:id", updateRide);
router.delete("/:id", deleteRide);

export default router;
