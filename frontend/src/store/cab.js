import { create } from "zustand";

export const useCabStore = create((set) => ({
	cabs: [],
	setCabs: (cabs) => set({ cabs }),

	createCab: async (newCab) => {
		if (!newCab.numberplate || !newCab.driver) {
			return { success: false, message: "Please fill in all the fields" };
		}

		const res = await fetch("/api/cabs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newCab),
		});

		const data = await res.json();
		set((state) => ({ products: [...state.cabs, data.data] }));
		return { success: true, message: "Cab created successfully" };
	},

	fetchCabs: async () => {
		const res = await fetch("/api/cabs");
		const data = await res.json();

		set({ cabs: data.data });
	},
}));
