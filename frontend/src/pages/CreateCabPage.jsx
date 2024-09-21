import { useToast, Container, Button, VStack, Heading, Input, Box, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCabStore } from "../store/cab.js";

const CreateCabPage = () => {
	const [newCab, setNewCab] = useState({
		numberplate: "",
		driver: "",
	});

	const toast = useToast();
	const { createCab } = useCabStore();
	const handleAddCab = async () => {
		const { success, message } = await createCab(newCab);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}

		setNewCab({ numberplate: "", driver: "" });
		console.log("Success: ", success);
		console.log("Message: ", message);
	};
	return (
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h2"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Cab
				</Heading>
				<Box w={"full"} rounded={"lg"} shadow={"md"} p={6} bg={useColorModeValue("white", "gray.700")}>
					<VStack spacing={4}>
						<Input
							placeholder="Number Plate"
							name="numberplate"
							value={newCab.numberplate}
							onChange={(e) => setNewCab({ ...newCab, numberplate: e.target.value })}
						/>
						<Input
							placeholder="Driver Name"
							name="driver"
							value={newCab.driver}
							onChange={(e) => setNewCab({ ...newCab, driver: e.target.value })}
						/>
						<Button colorScheme="blue" onClick={handleAddCab}>
							Submit
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default CreateCabPage;
