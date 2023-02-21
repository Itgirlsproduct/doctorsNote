const open = document.getElementById("open");
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const loginBtn = document.querySelector(".showcase-btn");
const newsBtn = document.querySelector(".articleBtn");

const openSidebar = () => {
	sidebar.style.display = "inline-block";
};

const closeSidebar = () => {
	sidebar.style.display = "none";
};

// Event listeners
open.addEventListener("click", openSidebar);
close.addEventListener("click", closeSidebar);

// Smooth scrolling
/*$(document).ready(function () {
	$("ul li a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				600,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
});*/

let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
	showSlides((slideIndex += 1));
}
function previousSlide() {
	showSlides((slideIndex -= 1));
}
function currentSlide(n) {
	showSlides((slideIndex = n));
}
function showSlides(n) {
	let i;
	let slides = document.querySelectorAll(".testimonial");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let slide of slides) {
		slide.style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
