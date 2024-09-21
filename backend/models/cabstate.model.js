import mongoose from "mongoose";

const CabScheme = new mongoose.Schema({
	numberplate: {
		type: String,
		required: true,
	},
	assignstate: {
		type: Boolean,
		required: false,
		default: false,
	},
	driver: {
		type: String,
		required: true,
	},
});

const Cab = mongoose.model("Cab", CabScheme);
export default Cab;
