import Typed from "react-typed";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Stepper } from "awesome-react-stepper";
import { Line, Circle } from "rc-progress";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import Contact from "./pages/Contact";
import NoMatching from "./pages/NoMatching";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {


	return (
		<div>
			<Header></Header>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoMatching />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
