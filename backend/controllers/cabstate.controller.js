import mongoose from "mongoose";
import Cab from "../models/cabstate.model.js";

export const getCabs = async (req, res) => {
	try {
		const cabs = await Cab.find({});
		res.status(200).json({ success: true, data: cabs });
	} catch (error) {
		console.error("Error Loading Data: ", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createCab = async (req, res) => {
	const cab = req.body;

	if (!cab.numberplate || !cab.driver) {
		return res.status(404).json({ success: false, message: "Please provide all the fields" });
	}

	const newCab = new Cab(cab);

	try {
		await newCab.save();
		res.status(201).json({ success: true, data: newCab });
	} catch (error) {
		console.error("Error in Creating Cab: ", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updateCab = async (req, res) => {
	const { id } = req.params;
	const cab = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product ID" });
	}

	try {
		const updateCab = await Cab.findByIdAndUpdate(id, cab, { new: true });

		if (!updateCab) {
			return res.status(404).json({ success: false, message: "Cab no found" });
		}

		res.status(200).json({ success: true, data: updateCab });
	} catch (error) {
		console.error("Update was not possible");
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const deleteCab = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product ID" });
	}

	try {
		await Cab.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Cab has been deleted" });
	} catch (error) {
		console.error("Error in Deleting");
		res.status(200).json({ success: false, message: "Server Error" });
	}
};
