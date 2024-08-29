// Navbar scroll effect and to top button
function userScroll() {
	const navbar = document.querySelector(".navbar");
	const toTopBtn = document.querySelector("#to-top");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("bg-dark");
			navbar.classList.add("navbar-sticky");
			toTopBtn.classList.add("show");
		} else {
			navbar.classList.remove("bg-dark");
			navbar.classList.remove("navbar-sticky");
			toTopBtn.classList.remove("show");
		}
	});
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Typing Effect
function runTypingEffect() {
	const text = "I am Alan Webb";
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
document.querySelector("#to-top").addEventListener("click", scrollToTop);
