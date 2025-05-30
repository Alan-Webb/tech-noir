import {Video} from "lucide-react";
import howItWorksImg from "../assets/how-it-works.jpg";

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
					<img src={howItWorksImg} alt="example of our stage-craft" />
				</div>
        <div className="pt-12 w-full lg:w-1/2">
          
        </div>
			</div>
		</div>
	);
};

export default HowItWorks;
