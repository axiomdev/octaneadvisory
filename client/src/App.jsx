import Typed from "react-typed";
import Hamburger from "hamburger-react";
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
	
	return (
		<>
			<Header></Header>
		

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
