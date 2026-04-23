import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";
import user7 from "../assets/user7.webp";
import user8 from "../assets/user8.webp";
import user9 from "../assets/user9.webp";

const Testimonials = () => {
	const testimonials = [
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

	return (
		<section id="testimonials">
			<div className="mt-20 pt-10 tracking-wide">
				<h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20">
					Testimonials
				</h2>
				<div className="flex flex-wrap justify-center">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
							<div className="bg-neutral rounded-md p-6 text-md border border-purple-800 font-thin">
								<p>{testimonial.text}</p>
								<div className="flex mt-8 items-start">
									<img
										src={testimonial.image}
										alt={testimonial.user}
										className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
									/>
									<div>
										<h6>{testimonial.user}</h6>
										<span className="text-sm font-normal italic text-neutral-600">
											{testimonial.company}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
