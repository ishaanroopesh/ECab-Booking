import { Container, Menu, MenuList, MenuButton, MenuItem, Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRideStore } from "../store/ride.js"; // Import the Zustand store
import { useCabStore } from "../store/cab.js";

const AllotCabPage = () => {
	const { rideId } = useParams(); // Extract rideId from URL
	const { rides, fetchRide } = useRideStore(); // Use Zustand store to access ride data and fetching function
	const { cabs, fetchCabs } = useCabStore();
	// Find the specific ride in the Zustand store
	const ride = rides.find((r) => r._id === rideId);

	// Fetch the ride data if it's not already in the store
	useEffect(() => {
		if (!ride) {
			fetchRide(); // Fetch all rides (or modify fetchRide to fetch by ID)
		}
	}, [rideId, ride, fetchRide]);

	useEffect(() => {
		fetchCabs();
	}, [fetchCabs]);

	// Display loading state if ride is null
	if (!ride) {
		return <div>Loading...</div>; // Display loading state while fetching
	}

	return (
		<Container>
			<h1>Assign a cab for ride {rideId}</h1>
			<p>Email: {ride.email}</p>
			<p>Organization: {ride.organization}</p>
			<p>Pickup: {ride.pickup}</p>
			<p>Dropoff: {ride.dropoff}</p>
			<p>Status: {ride.status}</p>
			{/* Display other ride attributes */}
			<br />
			<Box>
				<Menu>
					<MenuButton as={Button} rightIcon={<ChevronDownIcon />} size={"lg"}>
						Actions
					</MenuButton>
					<MenuList>
						{cabs.map((cab, index) => (
							// <RideStatus key={cab.id || index} cab={cab} />
							<MenuItem> {cab.driver}</MenuItem>
						))}
					</MenuList>
				</Menu>
			</Box>
		</Container>
	);
};

export default AllotCabPage;
