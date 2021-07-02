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
		hamburgerLine1.style.transform = `rotate(${45}deg)`;
		hamburgerLine2.style.transform = `rotate(${-45}deg)`;
		hamburgerLine2.style.marginTop = `${-3}px`;
		isTransformed = false;
	} else {
		nav__slider.style.opacity = `${0}`;
		nav__slider.style.marginLeft = `${-3000}px`;
		hamburgerLine1.style.transform = `rotate(${0}deg)`;
		hamburgerLine2.style.transform = `rotate(${0}deg)`;
		hamburgerLine2.style.marginTop = `${3}px`;
		isTransformed = true;
	}
}, false);


// images view effect onscroll
const image__view__ele = document.querySelectorAll(".img__view");

window.addEventListener("scroll", () => {
	image__view__ele.forEach(ele => {
		let ele__height = ele.getBoundingClientRect().top;
		let win__height = window.innerHeight / 2;
		if (Math.floor(ele__height) <= (Math.round(win__height))) {
			ele.style.opacity = `${1}`;
			ele.style.transition = `${1000}ms ease-in-out`;
			ele.style.transform = `translateY(${0}px)`;
		} else {
			ele.style.opacity = `${0}`;
			ele.style.transition = `${1000}ms ease-in-out`;
			ele.style.transform = `translateY(${25}px)`;
		}
	})
})