import schema1 from "../assets/images/schema-1.png";
import firstStep from "../assets/images/first-step-1.png";
import secondStep from "../assets/images/second-step.png";
import thirdStep from "../assets/images/third-step.png";
import fourthStep from "../assets/images/fourth-step.png";
import fifthStep from "../assets/images/fifth-step.png";
import gif from "../assets/images/video-tableau-de-bord.gif";
import photoMe from "../assets/images/mendel-drai.jpg";
import inflechir from "../assets/images/inflechir.jpg";
import maitriser from "../assets/images/maitriser.jpg";
import optimiser from "../assets/images/optimiser.jpg";
import communiquer from "../assets/images/communiquer.jpg";
import "../assets/css/App.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer";

function Home() {
	const steps_methodology = [
		{
			id: 1,
			step_number: "I",
			title: "Diagnostiquer (Où en est-on ?)",
			icon_path: firstStep,
			text: "Un état des lieux s’articule autour d’un diagnostic stratégique et financier. Cette analyse doit permettre d’identifier les facteurs clés de succès et de risques de l’entreprise.",
		},
		{
			id: 2,
			step_number: "II",
			title: "Définir (Où va-t-on ?)",
			icon_path: secondStep,
			text: "Il est question de définir les objectifs de l’entreprise dans un plan d’action. Un horizon temporel cadre les actions stratégiques (long terme) et opérationnelles (moyen terme et court terme).",
		},
		{
			id: 3,
			step_number: "III",
			title: "Piloter (Comment on y va ?)",
			icon_path: thirdStep,
			text: "Une fois le cap défini, un tableau de bord stratégique et opérationnel permettent de piloter les actions à entreprendre. Des indicateurs clés de performance sont choisis et conçus pour déployer la stratégie de l’entreprise.",
		},
		{
			id: 4,
			step_number: "IV",
			title: "Evaluer (Est-ce qu’on y est arrivé ?)",
			icon_path: fourthStep,
			text: "Il convient d’identifier et d’analyser les écarts entre les prévisions et les réalisations. Ces signaux doivent susciter la réflexion des équipes concernées pour mieux comprendre les causes et ses effets sur l’entreprise.",
		},
		{
			id: 5,
			step_number: "V",
			title: "Corriger (Qu’est-ce qui ne va pas ?)",
			icon_path: fifthStep,
			text: "Pour affiner la stratégie, l’équipe dirigeante doit mener des actions correctives. Elles doivent permettre d’aligner les prévisions sur les réalités stratégiques et opérationnelles. À terme et, par ce processus de gestion de la performance, l’entreprise devient plus réactive face à son environnement.",
		},
	];

	return (
		<>
			<main>
				<div class="hero-background">
					<div class="hero-block-texts animate__animated animate__fadeInUpBig">
						<h1>
							Estimer la <br></br>
							<Typed
								className="perf"
								loop
								typeSpeed={100}
								backSpeed={100}
								strings={["performance", "valeur"]}
								smartBackspace
								shuffle={false}
								backDelay={1}
								fadeOut={false}
								fadeOutDelay={100}
								loopCount={0}
								showCursor
								cursorChar="|"
							></Typed>{" "}
							<br />
							de votre entreprise
						</h1>
						<p>
							Ma mission est de capter et délivrer la valeur de votre entreprise
							en alignant « finance et stratégie ».
						</p>
						<div className="button-hero">
							<Link to="/contact" className="button">
								Contactez moi
							</Link>
						</div>
					</div>
				</div>

				<section className="margin-left-right">
					<div id="pourquoi">
						<div className="double-titles">
							<h2>
								<span>Piloter</span> la performance de son entreprise ?
							</h2>
							<h3>Pourquoi</h3>
							<div className="double-titles-line line-first-title">&nbsp;</div>
						</div>
						<div className="why-block">
							<p>
								La création de valeur est une nécessité avant même d’être un
								but. L’entreprise capte cette valeur dès lors qu’elle atteint le
								niveau de performance exigé par son équipe dirigeante. Le
								pilotage de la performance permet d’infléchir la stratégie de
								l’entreprise, d’optimiser sa rentabilité, de maitriser sa
								trésorerie et de communiquer la vision stratégique de
								l’entreprise. En bref, l’entreprise s’inscrit dans une démarche
								active, réactive et proactive.
							</p>

							<img
								src={schema1}
								className="schema1"
								alt="schema-piloter-performance"
							/>
						</div>
					</div>

					<div className="block-explicative">
						<div className="block-explicative-block">
							<div className="double-titles one-line">
								<h2>
									<span>C’est </span> anticiper :
								</h2>
								<h3>Infléchir</h3>
								<div className="double-titles-line">&nbsp;</div>
							</div>
							<p>
								L’entreprise performante devient agile. Elle est capable, non
								seulement, de déployer et d’orienter sa stratégie mais aussi de
								l’infléchir, en tirant des leçons des retours d’expériences.
								Infléchir la stratégie de son entreprise, c’est anticiper les
								actions et réactions de l’environnement dans lequel elle évolue.
								C’est grâce à une vision synthétique et synoptique de la
								performance que l’équipe dirigeante peut raisonner en «
								connaissance de conséquence » plutôt qu’en connaissance de
								cause.
							</p>
						</div>
						<div className="center-image">
							<div className="div-bb">
								<img
									src={inflechir}
									alt="img-cube-inflechir"
									className="img-box"
								/>
							</div>
						</div>
					</div>

					<div className="block-explicative-optimize">
						<div className="center-image">
							<div className="div-bb">
								<img
									src={optimiser}
									alt="img-cube-optimiser"
									className="img-box"
								/>
							</div>
						</div>
						<div className="block-explicative-block">
							<div className="double-titles one-line">
								<h2>
									<span>C’est </span> perfectionner :
								</h2>
								<h3>Optimiser</h3>
								<div className="double-titles-line">&nbsp;</div>
							</div>
							<p>
								Le pilotage de la performance permet de détecter les
								dysfonctionnements de la chaine de valeur de l’entreprise, dans
								le but de prendre des décisions éclairées, pour optimiser la
								rentabilité. Il est alors possible de prendre des décisions
								d’internalisation ou d’externalisation des maillons non
								stratégique de la chaine de valeur.
							</p>
						</div>
					</div>

					<div className="block-explicative">
						<div className="block-explicative-block">
							<div class="double-titles one-line">
								<h2>
									<span>C’est </span> contrôler :
								</h2>
								<h3>Maitriser</h3>
								<div className="double-titles-line">&nbsp;</div>
							</div>
							<p>
								La gestion de la trésorerie est un levier d’action pour stimuler
								la croissance de l’entreprise. Le talonnement de la performance
								permet de prendre le contrôle sur la trésorerie. L’entreprise,
								plus habile et proactive, saisie de nouvelles opportunités
								d’investissements et gagne de nouvelle part de marché.
							</p>
						</div>
						<div className="center-image">
							<div className="div-bb">
								<img
									src={maitriser}
									alt="img-cube-inflechir"
									className="img-box"
								/>
							</div>
						</div>
					</div>

					<div className="block-explicative-optimize">
						<div className="center-image">
							<div className="div-bb">
								<img
									src={communiquer}
									alt="img-cube-optimiser"
									className="img-box"
								/>
							</div>
						</div>
						<div className="block-explicative-block">
							<div class="double-titles one-line">
								<h2>
									<span>C’est </span> impliquer :
								</h2>
								<h3>Communiquer</h3>
								<div className="double-titles-line">&nbsp;</div>
							</div>
							<p>
								Le tableau de bord de performance est un outil de dialogue entre
								la direction et ses subalternes. Il permet de partager, à
								l’ensemble de l’entreprise, une vision commune de la
								performance. Ce feedback génère un sentiment d’appartenance et
								renforce la culture de l’entreprise. Il permet alors de faire
								émerger de nouvelles idées de progrès, dans les processus et
								routines de l’entreprise. L’intelligence collective stimule
								ainsi la performance.
							</p>
						</div>
					</div>
				</section>

				<section className="margin-left-right margin-top-bottom">
					<div className="video">
						<p>
							Votre outil d’aide à la prise de décision personnalisée et adaptée
							à vos besoins
						</p>

						
					</div>
					<div className="center-image">
							<div className="div-bb">
								<img class="img-box" src={gif} />
							</div>
						</div>
				</section>

				<section className="margin-left-right margin-top-bottom">
					<div class="double-titles text-center methodology" id="methodologie">
						<h2 className="title-methodology">
							<span>Notre </span> méthodologie
						</h2>
						<h3>Methodologie</h3>
					</div>
					<p>
						J’adopte une méthodologie rigoureuse qui consiste à passer 95% de
						mon temps à définir correctement votre problème et les 5% restants,
						à trouver une solution optimale. Ce processus fait appel à la
						collaboration et à l’échange, nous invitant à se poser les bonnes
						questions. Une fois spécifier, votre problématique est structurée,
						c’est-à-dire décomposer en plus petit problème. Cette phase
						sollicite un esprit analytique et une réflexion constructive. Enfin,
						pour solutionner le problème j’utilise l’approche DDPEC :
					</p>

					<div class="wrapper">
						<div className="card-step-mobile">
							<Carousel
								showArrows={false}
								showIndicators={false}
								showStatus={false}
								centerMode={false}
							>
								{steps_methodology.map((step, index) => {
									return (
										<div className="card-step">
											<span>{step.step_number}</span>
											<div class="card-step-items">
												<h4>{step.title}</h4>
												<img
													className="logo-step"
													src={step.icon_path}
													alt="first-step-logo"
												/>
												<p>{step.text}</p>
											</div>
										</div>
									);
								})}
							</Carousel>
						</div>
						<div className="card-step-desktop">
							{steps_methodology.map((step, index) => {
								return (
									<div className="card-step">
										<span>{step.step_number}</span>
										<div class="card-step-items">
											<h4>{step.title}</h4>

											<img
												className="logo-step"
												src={step.icon_path}
												alt="first-step-logo"
											/>
											<p>{step.text}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className="margin-left-right">
					<div class="double-titles text-center">
						<h2>
							<span>A</span> propos de moi
						</h2>
						<h3>Qui suis-je ?</h3>
					</div>
					<div className="about-me-blocks">
						<div className="block-photo" id="quisuisje">
							<img class="photo-me" src={photoMe} alt="photo-mendel-drai" />
						</div>
						<p>
							Je m’appelle{" "}
							<a
								href="https://www.linkedin.com/in/mendel-drai-aa8761171/"
								target="_blank"
							>
								Mendel Drai
							</a>
							. Titulaire du diplôme supérieure de comptabilité et de gestion
							(DSCG), certifié en stratégie et corporate finance de la
							prestigieuse école HEC, mon savoir-faire s’articule autour d’une
							double ambition : capter et délivrer la valeur de votre
							entreprise. Après 8 ans d’évolution dans les domaines de la
							comptabilité, la finance et la stratégie d’entreprise, je partage
							mes connaissances aux entrepreneurs pour formuler des analyses
							pertinentes en amont de toutes prises de décisions. Expert en
							pilotage de la performance, je conçois des outils automatisés et
							personnalisés tel que des tableaux de bord et des systèmes de
							reporting. Je développe une approche taillée à la mesure de vos
							exigences. L’écoute et la sagesse constituent le socle sur lequel
							repose ma philosophie managériale.
						</p>
					</div>
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}

export default Home;
