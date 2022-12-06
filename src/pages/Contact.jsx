import logo from "../assets/images/octane-logo.png";
import background from "../assets/images/home-background.jpeg";
import schema1 from "../assets/images/schema-1.png";
import firstStep from "../assets/images/first-step-1.png";
import "../assets/css/App.css";
import Typed from "react-typed";
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { Line, Circle } from "rc-progress";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useCallback } from "react";

function Contact() {
	const [isOpen, setOpen] = useState(false);

	const [percent, setPercent] = useState(0);
	const [stepLevel, setStepLevel] = useState(1);
	const bottomRef = useRef();
	const [steps, setSteps] = useState([]);
	const handleScroll = useCallback(() => {
		console.log("scrolling")
	  }, [])

	useEffect(() => {
		setSteps((current) => [
			{
				id: 1,
				type: "select",
				question: "Quel est votre secteur dactivité ?",
				values: ["Expertise comptable", "Footballeur", "Ingenieur sécyruité"],
				class: "block",
			},
			{
				id: 2,
				type: "select",
				question: "Mon entreprise existe depuis",
				values: ["Moins d'un an", "Entre 1 et 10 ans", "Plus de 10 ans"],
				class: stepLevel == 2 ? "block" : "none",
			},
			{
				id: 3,
				type: "select",
				question: "Mon effectif salariale est compris entre",
				values: ["10", "20", "30", "40", "50", "+50"],
				class: stepLevel == 3 ? "block" : "none",
			},
			{
				id: 4,
				type: "select",
				question: "Mon effectif salariale est compris entre",
				values: ["10", "20", "30", "40", "50", "+50"],
				class: stepLevel == 4 ? "block" : "none",
			},
			{
				id: 5,
				type: "input",
				question: "Mon chiffre d’affaires du dernier exercice clôturé est de :",
				values: null,
				class: stepLevel == 5 ? "block" : "none",
			},
			{
				id: 6,
				type: "input",
				question: "Mon résultat net du dernier exercice clôturé est de :",
				values: null,
				class: stepLevel == 6 ? "block" : "none",
			},
			{
				id: 7,
				type: "input",
				question: "Mon chiffre d’affaires espéré pour l’exercice en cours :",
				values: null,
				class: stepLevel == 7 ? "block" : "none",
			},
			{
				id: 8,
				type: "select",
				question: "Qu’attendez-vous de Octane advisory ?",
				values: [
					"Un état des lieux de la performance actuelle de mon entreprise",
					"Un suivi périodique de la performance de mon entreprise",
					"Un business plan pour présenter la performance future de mon entreprise",
					"Autres demandes spécifiques",
				],
				class: stepLevel == 8 ? "block" : "none",
			},
			{
				id: 9,
				type: "input",
				question: "Nom de l’entreprise :",
				values: null,
				class: stepLevel == 9 ? "block" : "none",
			},
			{
				id: 10,
				type: "input",
				question: "Email",
				values: null,
				class: stepLevel == 10 ? "block" : "none",
			},
			{
				id: 11,
				type: "input",
				question: "Téléphone",
				values: null,
				class: stepLevel == 11 ? "block" : "none",
			},
		]);
	}, [setSteps]);

	bottomRef.current?.scrollIntoView({
		behavior: "smooth",
	
	});

	return (
		<div className="p-relative margin-left-right">
			<div className="contact-top">
				<h1>Formulaire de contact</h1>

				<div>
					<Line
						percent={percent}
						strokeWidth={2}
						strokeColor="#C1AD89"
						trailColor="#F3F3F3"
						strokeLinecap="round"
					/>
					<p className="p-absolute">{Math.round(percent)}</p>
				</div>
			</div>
			<div className="steps">
				{steps.map((step, index) => {
					if (step.type == "select" && step.class == "block") {
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
										{step.values.map((quest) => (
											<option key={quest}>{quest}</option>
										))}
									</select>
								</div>
							</div>
						);
					} else if (step.type == "input" && step.class == "block") {
						return (
							<div key={step.id} className={"step " + step.class}>
								<div className="step-question">
									<label>{step.question}</label>
									<input
										onChange={() => {
											setPercent(((index + 1) / steps.length) * 100);
											setStepLevel(step.id);
											steps[index + 1].class = "block";
										}}
									/>
								</div>
							</div>
						);
					}
				})}
<div ref={bottomRef} />
			</div>

		</div>
	);
}

export default Contact;
