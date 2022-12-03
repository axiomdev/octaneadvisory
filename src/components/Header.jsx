import logo from "../assets/images/octane-logo.png";
import background from "../assets/images/home-background.jpeg";
import Typed from "react-typed";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Line, Circle } from "rc-progress";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import Contact from "../pages/Contact";
import NoMatching from "../pages/NoMatching";
import Home from "../pages/Home";

function Header() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<header>
				<Link to="/" onClick={() => setOpen(false)}>
					<img src={logo} className="header-logo" alt="logo" />
				</Link>
				<Hamburger toggled={isOpen} toggle={setOpen} />

				{isOpen ? (
					<div class="menu" onClick={() => setOpen(false)}>
						<Link class="link-nav" to="/contact" onClick={() => setOpen(false)}>
							Contactez-moi
						</Link>
					</div>
				) : (
					""
				)}
			</header>
		</>
	);
}

export default Header;
