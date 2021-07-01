const slides = document.querySelectorAll(".slide__img");
const slide__handler__btn = document.getElementById("slide__handler__btn");
const hamburger = document.getElementById("hamburger");
const hamburgerLine1 = document.getElementById("line-1");
const hamburgerLine2 = document.getElementById("line-2");

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
		hamburgerLine1.style.transform = `rotate(${45}deg)`;
		hamburgerLine2.style.transform = `rotate(${-45}deg)`;
		hamburgerLine2.style.marginTop = `${-3}px`;
		isTransformed = false;
	} else {
		hamburgerLine1.style.transform = `rotate(${0}deg)`;
		hamburgerLine2.style.transform = `rotate(${0}deg)`;
		hamburgerLine2.style.marginTop = `${3}px`;
		isTransformed = true;
	}
}, false);