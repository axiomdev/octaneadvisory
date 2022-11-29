import logo from "../assets/images/octane-logo.png";
import background from "../assets/images/home-background.jpeg";
import schema1 from "../assets/images/schema-1.png";
import firstStep from "../assets/images/first-step-1.png";
import "../assets/css/App.css";
import Typed from "react-typed";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Line, Circle } from "rc-progress";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Contact() {
	const [isOpen, setOpen] = useState(false);

	const [percent, setPercent] = useState(0);
	const [stepLevel, setStepLevel] = useState(1);

	const [steps, setSteps] = useState([]);

	useEffect(() => {
		setSteps([
			{
				id: 1,
				question: "Quel est votre secteur dactivité?",
				values: ["okokok", "kokok"],
				class: "block",
			},
			{
				id: 2,
				question: "Mon entreprise existe depuis",
				values: ["Moins d'un an", "Entre 1 et 10 ans", "Plus de 10 ans"],
				class: stepLevel == 2 ? "block" : "none",
			},
			{
				id: 3,
				question: "Mon effectif salariale est compris entre",
				values: ["10", "20", "30", "40", "50", "+50"],
				class: stepLevel == 3 ? "block" : "none",
			},
		]);
	}, [setSteps]);

	return (
		<div className="p-relative margin-left-right">
			<h1>Formulaire de contact</h1>

			<Line percent={percent} strokeWidth={4} strokeColor="#D3D3D3" />
			<p className="p-absolute">{Math.round(percent)}</p>
			<div className="step-overflow">
				{steps.map((step, index) => {
					return (
						<div key={step.id} className={"step " + step.class}>
							<div className="step-question">
								<label>{step.question}</label>
								<select
									onChange={() => {
										setPercent(((index + 1) / steps.length) * 100);
										setStepLevel(step.id);
										steps[index + 1].class = "block";
									}}
								>
									{/* {step.values.forEach((element, index) => (
								<option value="ok"> {element} </option>
							))} */}

									{step.values.map((quest) => (
										<option>{quest}</option>
									))}
								</select>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Contact;
