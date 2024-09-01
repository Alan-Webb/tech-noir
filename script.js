// NAVBAR
// JS representation from DOM
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
//hamburger animation
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

// Navbar scroll effect
function userScroll() {
	const navbar = document.querySelector(".nav-container");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("navbar-scroll");
		} else {
			navbar.classList.remove("navbar-scroll");
		}
	});
}

// Typing Effect
function runTypingEffect() {
	const text = "Hello World! I am";
	const typingElement = document.getElementById("typing-text");
	const typingDelay = 250;

	typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			typingElement.textContent += text.charAt(i);
		}, delay * i);
	}
}

// Event listeners
document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", runTypingEffect);
