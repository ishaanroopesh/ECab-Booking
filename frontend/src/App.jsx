import { useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreateCabPage from "./pages/CreateCabPage.jsx";
import Navbar from "./components/Navbar.jsx";
import AllotCabPage from "./pages/AllotCabPage.jsx";
// import "./App.css";

function App() {
	return (
		<>
			<Box minH={"100vh"} bg={useColorModeValue("gray.150", "gray.850")}>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/createcab" element={<CreateCabPage />} />
					<Route path="/allotcab/:rideId" element={<AllotCabPage />} />
				</Routes>
			</Box>
		</>
	);
}

export default App;
