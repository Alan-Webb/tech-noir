import {Video} from "lucide-react";
import howItWorksImg from "../assets/how-it-works.webp";

const HowItWorks = () => {
	const howItWorksItems = [
		{
			title: "Concept to Creation",
			description:
				"We begin by collaborating closely with clients to develop bold visual concepts tailored to each story.",
		},
		{
			title: "Design & Development",
			description:
				"Our artists and technicians design, sculpt, and prototype characters, creatures, and effects with meticulous attention to detail.",
		},
		{
			title: "On-Set Execution",
			description:
				"We deploy our team to the set to apply make-up, operate practical effects, and ensure flawless real-time integration.",
		},
		{
			title: "Post-Production Enhancement ",
			description:
				"We refine the final product with digital touch-ups and VFX to seamlessly blend practical and visual elements on screen.",
		},
	];

	return (
		<section id="howitworks">
			<div className="mt-20 pt-20">
				<h2 className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide">
					From Imagination to Impact:{" "}
					<span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
						Bringing Your World to Life
					</span>
				</h2>
				<div className="flex flex-wrap justify-center">
					<div className="p-2 w-full lg:w-1/2">
						<img
							src={howItWorksImg}
							alt="example of our stage-craft"
							className="rounded-xl mt-8 md:my-32 border border-purple-700 shadow-purple-400"
						/>
					</div>
					<div className="pt-12 w-full lg:w-1/2">
						{howItWorksItems.map((item, index) => (
							<div key={index} className="flex mb-12">
								<div className="text-purple-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
									<Video />
								</div>
								<div>
									<h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
									<p className="text-md text-neutral-500">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
