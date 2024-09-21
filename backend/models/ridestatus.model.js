import mongoose from "mongoose";

const RideScheme = new mongoose.Schema(
	{
		rider: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		pickup: {
			type: String,
			required: true,
		},
		dropoff: {
			type: String,
			required: true,
		},
		mobilenumber: {
			type: Number,
			required: true,
		},
		organization: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: false,
			enum: ["Not-Assigned", "In-Progress", "Completed"],
			default: "Not-Assigned",
		},
		cabid: {
			type: String,
			required: false,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

const Ride = mongoose.model("Rides", RideScheme);
export default Ride;
