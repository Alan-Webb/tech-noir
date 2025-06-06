import {CheckCircle2} from "lucide-react";
import {pricingOptions} from "../constants";

const Options = () => {
	return (
		<section id="options">
			<div className="mt-20">
				<h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wider">
					Options
				</h2>
				<div className="flex flex-wrap">
					{pricingOptions.map((option, index) => (
						<div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
							<div className="p-10 border border-purple-700 rounded-xl">
								<p className="text-3xl mb-8">
									{option.title}
									{option.title === "Cinematic FX Package" && (
										<span className="bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
											(Most Popular)
										</span>
									)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Options;
