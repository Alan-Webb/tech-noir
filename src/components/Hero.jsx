import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
	return (
		<div className="flex flex-col items-center mt-6 lg:mt-8">
			<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
				Tech Noir{" "}
				<span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
					Sci-Fi & Fantasy Visual Effects
				</span>
			</h1>
			<p className="mt-10 text-xl text-center text-neutral-300 max-w-4xl">
				Crafting unforgettable worlds through cutting-edge special effects and
				visionary make-up for sci-fi and fantasy films.
			</p>
			<div className="flex justify-center my-4">
				<a
					href="#options"
					className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md">
					View Options
				</a>
			</div>
			<div className="flex mt-10 justify-center">
				<video
					autoPlay
					loop
					muted
					className="rounded-lg w-1/2 border border-purple-700 shadow-purple-400 mx-2 my-2">
					<source src={video1} type="video/mp4"></source>
				</video>
				<video
					autoPlay
					loop
					muted
					className="rounded-lg w-1/2 border border-purple-700 shadow-purple-400 mx-2 my-2">
					<source src={video2} type="video/mp4"></source>
				</video>
			</div>
		</div>
	);
};

export default Hero;
