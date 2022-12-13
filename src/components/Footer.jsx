import linkedin from "../assets/images/linkedin.png";

function Footer() {
	return (
		<>
			<footer>
				<p>2023 © Tous droit reservés. Octane Advisory</p>
				<a href="https://www.linkedin.com/company/octane-advisory/"><img src={linkedin} className="footer-social-network" alt="logo-linkedin" /></a>
			</footer>
		</>
	);
}

export default Footer;
