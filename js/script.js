var elMenuButton = document.querySelector(".menu");
var elNavList = document.querySelector(".nav__list");

elMenuButton.addEventListener("click", function() {
	elNavList.classList.toggle("nav__list--on");

	elMenuButton.classList.toggle("menu--close");
});