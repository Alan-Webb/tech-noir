import {Eye} from "lucide-react";
import {ScanFace} from "lucide-react";
import {BicepsFlexed} from "lucide-react";
import {Gpu} from "lucide-react";
import {ShieldUser} from "lucide-react";
import {GlobeLock} from "lucide-react";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const navItems = [
	{label: "Features", href: "#"},
	{label: "How it works", href: "#"},
	{label: "Options", href: "#"},
	{label: "Testimonials", href: "#"},
];

export const features = [
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

export const howItWorksItems = [
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

export const testimonials = [
	{
		user: "Sarah Lin",
		company: "Nebula Films",
		image: user1,
		text: "Tech-Noir's effects brought our alien world to life. Their attention to detail is unmatched.",
	},
	{
		user: " Jared Mason",
		company: "Starforge Studios",
		image: user2,
		text: "From eerie prosthetics to stunning creature designs, Tech-Noir delivered beyond expectations.",
	},
	{
		user: "Leila Grant",
		company: "Quantum Stageworks",
		image: user3,
		text: "We needed cinematic-level effects on a tight schedule, and Tech-Noir came through flawlessly.",
	},
	{
		user: "Marco Del Rio",
		company: "Titan’s Edge Productions",
		image: user4,
		text: "Their make-up team transformed our cast into believable mutants. Audiences were blown away!",
	},
	{
		user: "Dani Thomasson",
		company: "Crimson Orbit Entertainment",
		image: user5,
		text: "Tech-Noir's visionary team elevated our indie project to a professional level. They’re pure magic.",
	},
	{
		user: "Rohan Steele",
		company: "Starlight Syndicate",
		image: user6,
		text: "The realism in their sci-fi effects was jaw-dropping. Collaborating with them was a creative joy.",
	},
];
