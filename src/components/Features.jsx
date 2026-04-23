import {Eye} from "lucide-react";
import {ScanFace} from "lucide-react";
import {BicepsFlexed} from "lucide-react";
import {Gpu} from "lucide-react";
import {ShieldUser} from "lucide-react";
import {GlobeLock} from "lucide-react";

const Features = () => {
	const features = [
		{
			icon: <Eye />,
			text: "Cinematic Special Effects",
			description:
				"We deliver high-impact visual effects that bring your sci-fi and fantasy visions to life with cinematic precision.",
		},
		{
			icon: <ScanFace />,
			text: "Expert Creature & Character Design",
			description:
				"From aliens to ancient beasts, our artists sculpt unforgettable characters with intricate detail and imaginative flair.",
		},
		{
			icon: <BicepsFlexed />,
			text: "Advanced Prosthetics & Make-Up",
			description:
				"Our custom prosthetics and make-up transformations blur the line between fiction and reality on screen.",
		},
		{
			icon: <Gpu />,
			text: "Seamless Practical & Digital Integration",
			description:
				"We blend physical effects with cutting-edge digital enhancements for immersive, believable storytelling.",
		},
		{
			icon: <ShieldUser />,
			text: "On-Set Effects Supervision",
			description:
				"Our experienced team works directly on set to ensure flawless application, continuity, and creative execution.",
		},
		{
			icon: <GlobeLock />,
			text: "Collaborative Concept Development",
			description:
				"We partner with directors and production teams from day one to shape bold, original visual worlds tailored to each story.",
		},
	];

	return (
		<section id="features">
			<div className="relative mt-20 pt-28 sm:pt-20 border-b border-purple-800 min-h-[50rem]">
				<div className="text-center">
					<h2 className="text-2xl sm:text-4xl lg:text-5xl mt-8 lg:mt-12 tracking-wide">
						Explore world-class{" "}
						<span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
							sci-fi and fantasy effects
						</span>
					</h2>
				</div>
				<div className="flex flex-wrap mt-10 lg:mt-20">
					{features.map((feature, index) => (
						<div key={index} className="w-full sm:1/2 lg:w-1/3">
							<div className="flex">
								<div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-700 justify-center items-center rounded-full">
									{feature.icon}
								</div>
								<div>
									<h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
									<p className="text-md p-2 mb-20 text-neutral-500">
										{feature.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
