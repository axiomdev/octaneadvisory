import Typed from "react-typed";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Line, Circle } from "rc-progress";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import Contact from "./pages/Contact";
import NoMatching from "./pages/NoMatching";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/App.css";
import "./assets/css/responsive.css";

function App() {
	const [contact, setContact] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setContact(true);
		}, 2500);
	});
	return (
		<>
			<Header></Header>
			{contact ? (
				<div className="rounded-right animate__animated animate__fadeInRight">
					<Link to="/contact">Contactez-moi</Link>
				</div>
			) : ""}

			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoMatching />} />
			</Routes>
			{/* <Footer></Footer>	 */}
		</>
	);
}

export default App;
