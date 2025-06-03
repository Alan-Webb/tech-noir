import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Options from "./components/Options";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="max-w-7xl mx-auto pt-20 px-6">
				<Hero />
				<Features />
				<HowItWorks />
				<Options />
				<Testimonials />
				<Contact />
			</div>
		</>
	);
};

export default App;
