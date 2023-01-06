import "../assets/css/App.css";
import { useEffect, useState } from "react";

function NoMatching() {
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
			No matching
		
		</div>
	);
}

export default NoMatching;
