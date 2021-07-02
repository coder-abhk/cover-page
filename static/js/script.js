const slides = document.querySelectorAll(".slide__img");
const slide__handler__btn = document.getElementById("slide__handler__btn");
const hamburger = document.getElementById("hamburger");
const hamburgerLine1 = document.getElementById("line-1");
const hamburgerLine2 = document.getElementById("line-2");
const nav__slider = document.getElementById("nav__slider");

var count = 0;

function slideHandler() {
	if (count === slides.length - 1) {
		count = 0;
	} else {
		count += 1;
	}

	changeSlide();

}

function changeSlide() {
	for (let i = 0; i < slides.length; i += 1)
		slides[i].classList.remove("active");

	slides[count].classList.add("active");
}

setInterval(() => {
	slideHandler();
}, 5000)



slide__handler__btn.addEventListener("click", () => {
	slideHandler()
}, false);

var isTransformed = true;
hamburger.addEventListener("click", () => {
	if (isTransformed) {
		nav__slider.style.opacity = `${1}`;
		nav__slider.style.marginLeft = `${0}px`;
		// nav__slider.style.display = "flex";
		// nav__slider.style.height = `${100}%`;
		hamburgerLine1.style.transform = `rotate(${45}deg)`;
		hamburgerLine2.style.transform = `rotate(${-45}deg)`;
		hamburgerLine2.style.marginTop = `${-3}px`;
		isTransformed = false;
	} else {
		nav__slider.style.opacity = `${0}`;
		nav__slider.style.marginLeft = `${-10000}px`;
		// nav__slider.style.display = "none";
		// nav__slider.style.height = `${0}%`;
		hamburgerLine1.style.transform = `rotate(${0}deg)`;
		hamburgerLine2.style.transform = `rotate(${0}deg)`;
		hamburgerLine2.style.marginTop = `${3}px`;
		isTransformed = true;
	}
}, false);