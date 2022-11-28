import logo from "./assets/images/octane-logo.png";
import background from "./assets/images/home-background.jpeg";
import schema1 from "./assets/images/schema-1.png";
import "./assets/css/App.css";
import Typed from "react-typed";
import Hamburger from "hamburger-react";
import { useState } from "react";

function App() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div>
			<header>
				<img src={logo} className="header-logo" alt="logo" />

				<Hamburger toggled={isOpen} toggle={setOpen} />

				{isOpen ? (
					<div class="menu">
						<p>Accueil</p>
					</div>
				) : (
					""
				)}
			</header>

			<main>
				<div class="hero-background">
					<div class="hero-block-texts">
						<h1>
							Estimer la <br></br>
							<Typed
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

						<button className="button">Contactez-nous</button>
					</div>
				</div>

				<section className="margin-left-right">
					<div className="double-titles">
						<h2>
							<span>Pourquoi</span> piloter la performance de son entreprise ?
						</h2>
						<h3>Pourquoi</h3>
						<span className="double-titles-line"></span>
					</div>
					<div>
						<p>
							La création de valeur est une nécessité avant même d’être un but.
							L’entreprise capte cette valeur dès lors qu’elle atteint le niveau
							de performance exigé par son équipe dirigeante. Le pilotage de la
							performance permet d’infléchir la stratégie de l’entreprise,
							d’optimiser sa rentabilité, de maitriser sa trésorerie et de
							communiquer la vision stratégique de l’entreprise. En bref,
							l’entreprise s’inscrit dans une démarche active, réactive et
							proactive.
						</p>
						<img
							src={schema1}
							className="schema1"
							alt="schema-piloter-performance"
						/>
					</div>

					<div class="double-titles">
						<h2>
							<span>C’est </span> anticiper :
						</h2>
						<h3>Infléchir</h3>
					</div>
					<p>
						L’entreprise performante devient agile. Elle est capable, non
						seulement, de déployer et d’orienter sa stratégie mais aussi de
						l’infléchir, en tirant des leçons des retours d’expériences.
						Infléchir la stratégie de son entreprise, c’est anticiper les
						actions et réactions de l’environnement dans lequel elle évolue.
						C’est grâce à une vision synthétique et synoptique de la performance
						que l’équipe dirigeante peut raisonner en « connaissance de
						conséquence » plutôt qu’en connaissance de cause.
					</p>

					<div class="double-titles">
						<h2>
							<span>C’est </span> perfectionner :
						</h2>
						<h3>Optimiser</h3>
					</div>
					<p>
						Le pilotage de la performance permet de détecter les
						dysfonctionnements de la chaine de valeur de l’entreprise, dans le
						but de prendre des décisions éclairées, pour optimiser la
						rentabilité. Il est alors possible de prendre des décisions
						d’internalisation ou d’externalisation des maillons non stratégique
						de la chaine de valeur.
					</p>

					<div class="double-titles">
						<h2>
							<span>C’est </span> contrôler :
						</h2>
						<h3>Maitriser</h3>
					</div>
					<p>
						La gestion de la trésorerie est un levier d’action pour stimuler la
						croissance de l’entreprise. Le talonnement de la performance permet
						de prendre le contrôle sur la trésorerie. L’entreprise, plus habile
						et proactive, saisie de nouvelles opportunités d’investissements et
						gagne de nouvelle part de marché.
					</p>

					<div class="double-titles">
						<h2>
							<span>C’est </span> impliquer :
						</h2>
						<h3>Communiquer</h3>
					</div>
					<p>
						Le tableau de bord de performance est un outil de dialogue entre la
						direction et ses subalternes. Il permet de partager, à l’ensemble de
						l’entreprise, une vision commune de la performance. Ce feedback
						génère un sentiment d’appartenance et renforce la culture de
						l’entreprise. Il permet alors de faire émerger de nouvelles idées de
						progrès, dans les processus et routines de l’entreprise.
						L’intelligence collective stimule ainsi la performance.
					</p>
				</section>

				<section>
					<h2>Methodologie</h2>
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
				</section>
			</main>
		</div>
	);
}

export default App;
