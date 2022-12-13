import logo from "../assets/images/octane-logo.png";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<header>
				<Link to="/" onClick={() => setOpen(false)}>
					<img src={logo} className="header-logo" alt="logo" />
				</Link>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					onToggle={(toggled) =>
						toggled
							? (document.body.style.overflow = "hidden")
							: (document.body.style.overflow = "scroll")
					}
					className="burger"
				/>

			
					<div
						className={`menu ${!isOpen ? "d-none" : "d-block"}`}
						onClick={() => {
							setOpen(false);
							document.body.style.overflow = "scroll";
						}}
					>
						<div>
							<AnchorLink offset="150" class="link-nav" href="#pourquoi">
								Pourquoi
							</AnchorLink>
							<AnchorLink offset="150" class="link-nav" href="#methodologie">
								Methodologie
							</AnchorLink>
							<AnchorLink offset="10" class="link-nav" href="#quisuisje">
								Qui suis-je
							</AnchorLink>
							<Link
								class="link-nav"
								to="/contact"
								onClick={() => setOpen(false)}
							>
								Contactez-moi
							</Link>
						</div>
					</div>
				
				<div class="menu-desktop">
					<AnchorLink offset="150" class="link-nav" href="#pourquoi">
						Pourquoi
					</AnchorLink>
					<AnchorLink offset="150" class="link-nav" href="#methodologie">
						Methodologie
					</AnchorLink>
					<AnchorLink offset="10" class="link-nav" href="#quisuisje">
						Qui suis-je
					</AnchorLink>

					<Link class="link-nav contact-me-desktop" to="/contact">
						Contactez-moi
					</Link>
				</div>
			</header>
		</>
	);
}

export default Header;
