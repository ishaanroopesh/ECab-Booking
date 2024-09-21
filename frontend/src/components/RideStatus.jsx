import {
	Box,
	Image,
	Heading,
	Text,
	HStack,
	IconButton,
	useColorModeValue,
	Button,
	useToast,
	useDisclosure,
	VStack,
	Input,
	Flex,
	Menu,
	MenuList,
	MenuButton,
	MenuItem,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ChevronDownIcon, ArrowRightIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { GiCarKey } from "react-icons/gi";
import { PiCarProfileFill } from "react-icons/pi";
import { useRideStore } from "../store/ride.js";
import { useState } from "react";

import React from "react";

const RideStatus = ({ ride }) => {
	const bgColorMap = {
		"Not-Assigned": "yellow.400",
		"In-Progress": "green.300",
		Completed: "gray.300",
	};

	return (
		<Box
			rounded={"lg"}
			shadow={"lg"}
			overflow={"visible"}
			transition={"all 0.3s"}
			// _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			_hover={{ transform: "scale(1.01)", shadow: "xl" }}
			bg={bgColorMap[ride.status]}
			my={2}
		>
			<Box p={4}>
				<Heading as={"h3"} size={"md"} mb={2}>
					{ride.rider} | @{ride.organization} | {ride.email}
				</Heading>

				<Text fontWeight={"bold"} fontSize={"xl"}>
					{ride.pickup} <ArrowRightIcon /> {ride.dropoff}
				</Text>
				<Flex flexDir={{ base: "column", md: "row" }} alignItems={"center"} justifyContent={"space-between"}>
					<Text fontSize={"xx-large"} fontWeight={"bold"} fontStyle={"oblique"}>
						{ride.status} {ride.status === "In-Progress" ? <PiCarProfileFill /> : ""}{" "}
						{ride.status === "Not-Assigned" ? <GiCarKey /> : ""}{" "}
						{ride.status === "Completed" ? (
							<>
								<br />
								<CheckCircleIcon fontSize={34} />{" "}
							</>
						) : (
							""
						)}
					</Text>
					<HStack spacing={4} alignItems={"center"}>
						<Menu>
							<MenuButton as={Button} rightIcon={<ChevronDownIcon />} size={"lg"}>
								Actions
							</MenuButton>
							<MenuList>
								<Link to={`/allotcab/${ride._id}`}>
									<MenuItem>Select a Cab</MenuItem>
								</Link>

								<MenuItem>Delete</MenuItem>
							</MenuList>
						</Menu>
					</HStack>
				</Flex>
			</Box>
		</Box>
	);
};

export default RideStatus;
