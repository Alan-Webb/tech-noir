import {features} from "../constants";

const Features = () => {
	return (
		<div className="relative mt-20 border-b border-purple-800 min-h-[50rem]">
			<div className="text-center">
				<span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
					Features
				</span>
				<h2 className="text-2xl sm:text-4xl lg:text-5xl mt-8 lg:mt-12 tracking-wide">
					Explore world-class{" "}
					<span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
						sci-fi and fantasy effects
					</span>
				</h2>
			</div>
			<div className="flex flex-wrap mt-10 lg:mt-20">
				{features.map((feature, index) => (
					<div key={index} className="w-full sm:w-1/2 lg:w-1/3">
						<div className="flex">
							<div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-700 justify-center items-center rounded-full">
								{feature.icon}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
