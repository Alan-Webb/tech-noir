import {CheckCircle2} from "lucide-react";

const Options = () => {
	const pricingOptions = [
		{
			title: "Starter FX Package",
			description:
				"Perfect for indie productions or short films needing focused, high-quality effects.",
			features: [
				"Custom design of one creature, character, or effect element",
				"Basic prosthetic make-up and practical application",
				"Up to 2 days of on-set effects supervision",
				"Post-production VFX consultation and touch-up guidance",
			],
		},
		{
			title: "Cinematic",
			description:
				"Ideal for feature films or streaming projects with multiple characters and varying set-pieces.",
			features: [
				"Full concept development and design for up to 3 key effects",
				"Advanced prosthetics, make-up, and physical fabrication",
				"Up to 5 days of on-set support and application",
				"Seamless integration planning with your post-production VFX team",
			],
		},
		{
			title: "World-Building",
			description:
				"A complete visual effects solution for large-scale sci-fi and fantasy productions.",
			features: [
				"World and character design from concept to screen",
				"Custom prosthetics, costumes, and digital assets",
				"Full-time on-set FX supervision for major sequences",
				"Collaborative workflow across pre-production, shooting, and post",
			],
		},
	];

	return (
		<section id="options">
			<div className="mt-20 pt-20">
				<h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wider">
					Options
				</h2>
				<div className="flex flex-wrap">
					{pricingOptions.map((option, index) => (
						<div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
							<div className="p-10 border border-purple-700 rounded-xl">
								<p className="text-3xl mb-8">
									{option.title}
									{option.title === "Cinematic" && (
										<span className="bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
											(Popular)
										</span>
									)}
								</p>
								<p className="mb-8">
									<span className="text-md mt-6">{option.description}</span>
								</p>
								<ul>
									{option.features.map((feature, index) => (
										<li key={index} className="mt-8 flex items-center">
											<CheckCircle2 />
											<span className="ml-2">{feature}</span>
										</li>
									))}
								</ul>
								<a
									href="#"
									className="inline-flex justify-center items-center text-center w-full h-12 p-3 mt-8 border border-purple-400 rounded-xl tracking-tight text-xl hover:bg-purple-800  hover:scale-108 transition duration-200">
									Get Quote
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Options;
