import {Video} from "lucide-react";
import howItWorksImg from "../assets/how-it-works.webp";
import {howItWorksItems} from "../constants";

const HowItWorks = () => {
	return (
		<div className="mt-20">
			<h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide">
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
	);
};

export default HowItWorks;
