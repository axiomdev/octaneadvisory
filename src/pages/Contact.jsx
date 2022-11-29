import logo from "../assets/images/octane-logo.png";
import background from "../assets/images/home-background.jpeg";
import schema1 from "../assets/images/schema-1.png";
import firstStep from "../assets/images/first-step-1.png";
import "../assets/css/App.css";
import Typed from "react-typed";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Stepper } from "awesome-react-stepper";
import { Line, Circle } from "rc-progress";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Contact() {
	const [isOpen, setOpen] = useState(false);

	const [percent, setPercent] = useState(0);
	const [step, setStep] = useState(1);

	useEffect(() => {
		// Update the document title using the browser API
	});

	const steps = [
		{
			id: 1,
			question: "Quel est votre secteur dactivité?",
			values: ["a", "b"],
		},
		{
			id: 2,
			question: "Mon entreprise existe depuis",
			values: ["1an", "2ans"],
		},
	];

	return (
		<div>
			<h1>Formulaire de contact</h1>
			<Line percent={percent} strokeWidth={4} strokeColor="#D3D3D3" />

			{steps.map((step, index) => {
				return (
					<div className="step">
						<label>{step.question}</label>
						<select
							onChange={() => {
								setPercent(((index + 1) / steps.length) * 100);
								setStep(steps.length);
							}}
						>
							<option value="ok"> moins d'un 1 an </option>
							<option value="ok">1 à 10 ans</option>
							<option value="ok">plus de 10 ans</option>
						</select>
					</div>
				);
			})}
		</div>
	);
}

export default Contact;
