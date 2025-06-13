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
import user7 from "../assets/user7.webp";
import user8 from "../assets/user8.webp";
import user9 from "../assets/user9.webp";

export const navItems = [
	{label: "Features", href: "#features"},
	{label: "How it works", href: "#howitworks"},
	{label: "Options", href: "#options"},
	{label: "Testimonials", href: "#testimonials"},
	{label: "Contact", href: "#contact"},
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

export const pricingOptions = [
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
		text: "From prosthetics to stunning creature designs, Tech-Noir delivered beyond expectations.",
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
		company: "Crimson Orbit",
		image: user5,
		text: "Tech-Noir's visionary team elevated our indie project to a professional level. Pure magic.",
	},
	{
		user: "Rohan Steele",
		company: "Starlight Syndicate",
		image: user6,
		text: "The realism in their sci-fi effects was jaw-dropping. Working with them was a creative joy.",
	},
	{
		user: "Ellie Navarro",
		company: "Lunar Tides TV",
		image: user7,
		text: "Tech-Noir didn’t just create effects—they built entire worlds. Their creativity is next-level.",
	},
	{
		user: "Tom Reese",
		company: "Apex Aurora Films",
		image: user8,
		text: "We threw some wild concepts at them, and they turned every one into a visual masterpiece.",
	},
	{
		user: "Naomi Bell",
		company: "Darkstream Studios",
		image: user9,
		text: "The prosthetics, creature work, and FX make-up were so realistic, even our actors were amazed.",
	},
];
