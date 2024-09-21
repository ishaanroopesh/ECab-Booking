import mongoose from "mongoose";
import Ride from "../models/ridestatus.model.js";

export const getRides = async (req, res) => {
	try {
		const cabs = await Ride.find({});
		res.status(200).json({ success: true, data: cabs });
	} catch (error) {
		console.error("Error loading data");
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const getParticularRide = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		res.status(404).json({ success: false, message: "Invalid ObjectID" });
	}
	try {
		const ride = await Ride.findById(id);
		if (!ride) {
			return res.status(404).json({ success: false, message: "Ride Not Found" });
		}
		res.status(200).json({ success: true, data: ride });
	} catch (error) {
		console.error("Error loading the ride data");
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createRide = async (req, res) => {
	const ride = req.body;

	if (!ride.rider || !ride.email || !ride.pickup || !ride.dropoff || !ride.mobilenumber || !ride.organization) {
		res.status(404).json({ success: false, message: "Please provide all the fields" });
	}

	const newRide = new Ride(ride);

	try {
		await newRide.save();
		res.status(201).json({ success: true, data: newRide });
	} catch (error) {
		console.error("Error in creating a ride");
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updateRide = async (req, res) => {
	const { id } = req.params;
	const ride = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid ObjectID" });
	}

	try {
		const updateRide = await Ride.findByIdAndUpdate(id, ride, { new: true });

		if (!updateRide) {
			return res.status(404).json({ success: false, message: "Ride Not Found" });
		}
		res.status(200).json({ success: true, data: updateRide });
	} catch (error) {
		console.error("Update was not possible");
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const deleteRide = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid ObjectID" });
	}

	try {
		if (!Ride.findById(id)) {
			return res.status(404).json({ success: false, message: "Ride Not Found" });
		}
		await Ride.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Ride Deleted" });
	} catch (error) {
		console.error("Error in Deleting");
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
