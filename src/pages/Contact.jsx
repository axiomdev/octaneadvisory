import "../assets/css/App.css";
import { useEffect, useRef, useState } from "react";
import { Line } from "rc-progress";

function Contact() {
	const [percent, setPercent] = useState(0);
	const [stepLevel, setStepLevel] = useState(0);
	const [steps, setSteps] = useState([]);
	const [stepResponse, setStepResponse] = useState([]);
	const messagesEndRef = useRef(null);
	// const [activitySector, setActivitySector] = useState(localStorage.getItem("1"));
	const [turnover, setTurnover] = useState(localStorage.getItem("5"));
	const [result, setResult] = useState(localStorage.getItem("6"));
	const [expectedTurnover, setExpectedTurnover] = useState(
		localStorage.getItem("7"),
	);
	const [companyName, setCompanyName] = useState(localStorage.getItem("9"));
	const [email, setEmail] = useState(localStorage.getItem("10"));
	const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("10"));

	useEffect(() => {
		setSteps(() => [
			{
				id: 1,
				type: "select",
				name: "activity_sector",
				display_name: "activity_sector",
				question: "Quel est votre secteur dactivité ?",
				values: [
					"Agroalimentaire",
					"Banque / Assurance",
					"Bois / Papier / Carton / Imprimerie",
					"BTP / Matériaux de construction",
					"Chimie / Parachimie",
					"Commerce / Négoce / Distribution",
					"Édition / Communication / Multimédia",
					"Électronique / Électricité",
					"Études et conseils",
					"Industrie pharmaceutique",
					"Informatique / Télécoms",
					"Machines et équipements / Automobile",
					"Métallurgie / Travail du métal",
					"Plastique / Caoutchouc",
					"Services aux entreprises",
					"Textile / Habillement / Chaussure",
					"Transports / Logistique",
				],
				class: "block",
			},
			{
				id: 2,
				type: "select",
				name: "since",
				display_name: "since",
				question: "Mon entreprise existe depuis",
				values: ["Moins d'un an", "Entre 1 et 10 ans", "Plus de 10 ans"],
				class: stepLevel == 2 ? "block" : "none",
			},
			{
				id: 3,
				type: "select",
				name: "effectif",
				display_name: "effectif",
				question: "Mon effectif salariale est compris entre",
				values: ["0-10", "10-20", "20-30", "30-40", "40-50", "+50"],
				class: stepLevel == 3 ? "block" : "none",
			},
			{
				id: 4,
				type: "input",
				name: "setTurnover",
				display_name: "turnover",
				question: "Mon chiffre d’affaires du dernier exercice clôturé est de :",
				values: null,
				class: stepLevel == 4 ? "block" : "none",
			},
			{
				id: 5,
				type: "input",
				name: "setResult",
				display_name: "result",
				question: "Mon résultat net du dernier exercice clôturé est de :",
				values: null,
				class: stepLevel == 5 ? "block" : "none",
			},
			{
				id: 6,
				type: "input",
				name: "setExpectedTurnover",
				display_name: "expectedTurnover",
				question: "Mon chiffre d’affaires espéré pour l’exercice en cours :",
				values: null,
				class: stepLevel == 6 ? "block" : "none",
			},
			{
				id: 7,
				type: "select",
				name: "setTurnover",
				display_name: "turnover",
				question: "Qu’attendez-vous de Octane advisory ?",
				values: [
					"Un état des lieux de la performance actuelle de mon entreprise",
					"Un suivi périodique de la performance de mon entreprise",
					"Un business plan pour présenter la performance future de mon entreprise",
					"Autres demandes spécifiques",
				],
				class: stepLevel == 7 ? "block" : "none",
			},
			{
				id: 8,
				type: "input",
				name: "setCompanyName",
				display_name: "companyName",
				question: "Nom de l’entreprise :",
				values: null,
				class: stepLevel == 8 ? "block" : "none",
			},
			{
				id: 9,
				type: "input",
				name: "setEmail",
				display_name: "email",
				question: "Email",
				values: null,
				class: stepLevel == 9 ? "block" : "none",
			},
			{
				id: 10,
				type: "input",
				name: "setPhoneNumber",
				display_name: "phoneNumber",
				question: "Téléphone",
				values: null,
				class: stepLevel == 10 ? "block" : "none",
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

	console.log(stepResponse);

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
						style={{ left: (stepLevel / 10) * 90 + "%" }}
					>
						{Math.round(percent)} %
					</p>

					<p
						className="p-absolute p-absolute-desktop"
						style={{ left: (stepLevel / 10) * 98 + "%" }}
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

										id={`step-select-${step.id}`}
									>
										{step.values.map((quest) => (
											// quest == localStorage.getItem(step.id) ? 'selected' : ''
											<option
												key={quest}
												selected={quest == localStorage.getItem(step.id)}
											>
												{quest}
											</option>
										))}
									</select>

									{stepLevel != 0 ? (
										<div class="d-flex-center">
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
													console.log(document.querySelector("#step-select-" + step.id).value)
													setStepResponse(
														localStorage.setItem(
															step.id,
															document.querySelector("#step-select-" + step.id).value,
														),
														[stepResponse],
													);

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
										
									) : (
										<button
												className="button-input"
												onClick={() => {
													console.log(document.querySelector("#step-select-" + step.id).value)
													setStepResponse(
														localStorage.setItem(
															step.id,
															document.querySelector("#step-select-" + step.id).value,
														),
														[stepResponse],
													);

													setPercent(((index + 1) / steps.length) * 100);
													setStepLevel(step.id);
													steps[index].class = "none";
													steps[index + 1].class = "block";
												}}
											>
												{" "}
												Suivant{" "}
											</button>
									)}
								</div>
							</div>
						);
					} else if (step.type == "input" && step.class == "block") {
						if (step.display_name == "turnover") {
							var valueInput = turnover;
						} else if (step.display_name == "phoneNumber") {
							var valueInput = phoneNumber;
						} else if (step.display_name == "expectedTurnover") {
							var valueInput = expectedTurnover;
						} else if (step.display_name == "email") {
							var valueInput = email;
						} else if (step.display_name == "companyName") {
							var valueInput = companyName;
						} else if (step.display_name == "result") {
							var valueInput = result;
						}

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
										id={`step-input-${step.id}`}
										value={valueInput}
										onChange={(event) => {
											if (step.display_name == "turnover") {
												setTurnover(event.target.value);
											} else if (step.display_name == "phoneNumber") {
												setPhoneNumber(event.target.value);
											} else if (step.display_name == "expectedTurnover") {
												setExpectedTurnover(event.target.value);
											} else if (step.display_name == "email") {
												setEmail(event.target.value);
											} else if (step.display_name == "companyName") {
												setCompanyName(event.target.value);
											} else if (step.display_name == "result") {
												setResult(event.target.value);
											}
										}}
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
												setStepResponse(
													localStorage.setItem(
														step.id,
														document.querySelector("#step-input-" + step.id)
															.value,
													),
													[stepResponse],
												);

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

				{stepLevel == 10
					? ({
							id: 3,
							type: "select",
							name: "effectif",
							display_name: "effectif",
							question: "Mon effectif salariale est compris entre",
							values: ["10", "20", "30", "40", "50", "+50"],
							class: stepLevel == 3 ? "block" : "none",
					  },
					  {
							id: 4,
							type: "select",
							name: "setTurnover",
							display_name: "turnover",
							question: "Mon effectif salariale est compris entre",
							values: ["10", "20", "30", "40", "50", "+50"],
							class: stepLevel == 4 ? "block" : "none",
					  },
					  (
							<div class="recap">
								<h1>Recaptiulatif</h1>
								<p>Secteur d'actvité : {localStorage.getItem("1")}</p>
								<p>
									Mon entreprise existe depuis : {localStorage.getItem("2")}
								</p>
								<p>Effectif : {localStorage.getItem("3")}</p>

								<p>Numéro de telephone : {phoneNumber}</p>
								<p>Chiffre d'affaire esperé :{expectedTurnover}</p>
								<p>Resulat : {result}</p>
								<p>Email : {email}</p>
								<p>Société : {companyName}</p>

								<button
									onClick={() => {
										setPercent((9 / steps.length) * 100);
										setStepLevel(9);
										steps[9].class = "none";
										steps[9].class = "block";
									}}
									className="button-cancel"
								>
									Revenir
								</button>
							</div>
					  ))
					: ""}
				<div ref={messagesEndRef} />
			</div>
		</div>
	);
}

export default Contact;
