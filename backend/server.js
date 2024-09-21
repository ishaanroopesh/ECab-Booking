import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import cabstateRoutes from "./routes/cabstate.routes.js";
import ridestatusRoutes from "./routes/ridestatus.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/api/cabs", cabstateRoutes);
app.use("/api/rides", ridestatusRoutes);

app.listen(port, () => {
	connectDB();
	console.log(`Server started at http://localhost:${port}`);
});
