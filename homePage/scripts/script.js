const open = document.getElementById("open");
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const loginBtn = document.querySelector(".showcase-btn");

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
$(document).ready(function () {
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
});

loginBtn.addEventListener("click", function () {});
