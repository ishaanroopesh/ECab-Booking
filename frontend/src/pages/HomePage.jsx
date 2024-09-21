import {
	Container,
	Box,
	Image,
	Heading,
	Text,
	HStack,
	IconButton,
	useColorModeValue,
	Button,
	useToast,
	SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRideStore } from "../store/ride.js";
import RideStatus from "../components/RideStatus.jsx";

const HomePage = () => {
	const { fetchRide, rides } = useRideStore();
	useEffect(() => {
		fetchRide();
	}, [fetchRide]);
	return (
		<Container maxW={"container.xl"} py={12}>
			{rides.length == 0 && (
				<Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
					No Rides Found
				</Text>
			)}
			<SimpleGrid columns={{ base: 1 }} w={"full"}>
				{rides.map((ride, index) => (
					<RideStatus key={ride.id || index} ride={ride} />
				))}
			</SimpleGrid>
		</Container>
	);
};

export default HomePage;
