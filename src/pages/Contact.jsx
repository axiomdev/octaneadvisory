import "../assets/css/App.css";
import { useEffect, useRef, useState } from "react";
import { Line } from "rc-progress";

function Contact() {
	const [percent, setPercent] = useState(0);
	const [stepLevel, setStepLevel] = useState(0);
	const [steps, setSteps] = useState([]);
	const messagesEndRef = useRef(null);
	const [activitySector, setActivitySector] = useState(localStorage.getItem("1"));

	useEffect(() => {
		setSteps(() => [
			{
				id: 1,
				type: "select",
				name: "activity_sector",
				question: "Quel est votre secteur dactivité ?",
				values: ["Expertise comptable", "Footballeur", "Ingenieur sécyruité"],
				class: "block",
			},
			{
				id: 2,
				type: "select",
				name: "activity_sector",
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

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center",
		});
	};

	useEffect(scrollToBottom, [stepLevel]);

	return (
		<div className="p-relative margin-left-right">
			<div className="contact-top">
				<div className="line-percent">
					<Line
						percent={percent}
						strokeWidth={1}
						strokeColor="#C1AD89"
						trailColor="#adadad"
						strokeLinecap="round"
					/>
					<p
						className="p-absolute p-absolute-mobile"
						style={{ left: (stepLevel / 11) * 90 + "%" }}
					>
						{Math.round(percent)} %
					</p>

					<p
						className="p-absolute p-absolute-desktop"
						style={{ left: (stepLevel / 11) * 98 + "%" }}
					>
						{Math.round(percent)} %
					</p>
				</div>
			</div>
			<div className="steps">
				{steps.map((step, index) => {
					if (step.type == "select" && step.class == "block") {
						return (
							<div
								key={step.id}
								id={`step-${step.id}`}
								className={
									"step animate__animated animate__fadeInLeft " + step.class
								}
							>
								<div className="step-question">
									<label>{step.question}</label>
									<select
										onChange={(event) => {
											localStorage.setItem(step.id, event.target.value);
											setPercent(((index + 1) / steps.length) * 100);
											setStepLevel(step.id);
											steps[index].class = "none";
											steps[index + 1].class = "block";
										}}
									>
										{step.values.map((quest) => (
											// quest == localStorage.getItem(step.id) ? 'selected' : ''
											<option key={quest} selected={quest == localStorage.getItem(step.id)}>{quest}</option>
										))}
									</select>

									{stepLevel != 0 ? (
										<button
											onClick={() => {
												setPercent(((index - 1) / steps.length) * 100);
												setStepLevel(index - 1);

												steps[index].class = "none";
												steps[index - 1].class = "block";
											}}
											className="button-cancel"
										>
											Revenir
										</button>
									) : (
										""
									)}
								</div>
							</div>
						);
					} else if (step.type == "input" && step.class == "block") {
						return (
							<div
								key={step.id}
								id={`step-${step.id}`}
								className={
									"step animate__animated animate__fadeInLeft " + step.class
								}
							>
								<div className="step-question">
									<label>{step.question}</label>

									<input
										className="input"
										onChange={(event) => {
											localStorage.setItem(step.id, event.target.value);
										}}
										value={localStorage.getItem(step.id)}
									/>

									<div className="d-flex-center">
										<button
											onClick={() => {
												setPercent(((index - 1) / steps.length) * 100);
												setStepLevel(index - 1);
												steps[index].class = "none";
												steps[index - 1].class = "block";
											}}
											className="button-cancel"
										>
											Revenir
										</button>
										<button
											className="button-input"
											onClick={() => {
												setPercent(((index + 1) / steps.length) * 100);
												setStepLevel(step.id);
												steps[index].class = "none";
												steps[index + 1].class = "block";
											}}
										>
											{" "}
											Suivant{" "}
										</button>
									</div>
								</div>
							</div>
						);
					}
				})}

				{stepLevel == 11 ? <div>Etape Finale</div> : ""}
				<div ref={messagesEndRef} />
			</div>
		</div>
	);
}

export default Contact;
