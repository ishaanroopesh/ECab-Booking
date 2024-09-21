import React from "react";
import { Container, Flex, Button, Text, useColorMode, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { LuMail, LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

import "../Custom.css";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Container maxW={"inherit"} px={4}>
			<Flex
				h={20}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					md: "row",
				}}
			>
				<Text
					fontSize={30}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
					px={"12px"}
				>
					<Link to={"/"}>ECAB</Link>
				</Text>
				<HStack alignItems={"center"} px={"12px"} spacing={4}>
					<Link to={"/createcab"}>
						<Button _hover={{ transform: "scale(1.1)", shadow: "xl" }} className="mail">
							Add Cab <PlusSquareIcon />
						</Button>
					</Link>
					<Button
						className={colorMode === "light" ? "moon" : "sun"}
						_hover={{ transform: "scale(1.1)", shadow: "xl" }}
						onClick={toggleColorMode}
					>
						{colorMode === "light" ? <IoMoon /> : <LuSun fontSize={20} />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};

export default Navbar;
