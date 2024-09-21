import { create } from "zustand";
import { updateRide } from "../../../backend/controllers/ridestatus.controller";

export const useRideStore = create((set) => ({
	rides: [],
	setRides: (rides) => set({ rides }),

	createRide: async (newRide) => {
		if (
			!newRide.rider ||
			!newRide.email ||
			!newRide.pickup ||
			!newRide.dropoff ||
			!newRide.mobilenumber ||
			!newRide.organization
		) {
			return { success: false, message: "Please fill in all the fields" };
		}

		const res = await fetch("/api/rides", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newRide),
		});

		const data = await res.json();
		set((state) => ({ rides: [...state.rides, data.data] }));
		return { success: true, message: "Ride created successfully" };
	},

	fetchRide: async () => {
		const res = await fetch("/api/rides");
		const data = await res.json();

		set({ rides: data.data });
	},

	fetchRideById: async (rid) => {
		const res = await fetch(`/api/rides/${rid}`);
		const data = res.json();
		if (!data.success) {
			return { success: false, message: data.message };
		}

		return data.data;
	},

	updateRide: async (rid, updatedRide) => {
		const res = await fetch(`/api/rides/${rid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedRide),
		});
		const data = res.json();
		if (!data.success) {
			return { success: false, message: data.message };
		}

		set((state) => ({ rides: state.rides.map((ride) => (ride._id === rid ? data.data : ride)) }));
		return { success: "true", message: data.message };
	},
}));
