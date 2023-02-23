//===== START - MAPS =====//
const direccion1 = document.querySelector("#direccion1");
const direccion2 = document.querySelector("#direccion2");
const direccion = [direccion1, direccion2];

for (let i = 0; i < direccion.length; i++) {
	const maps = document.querySelector(".contact__left-img");
	const mapsDireccion1 =
		"!1m18!1m12!1m3!1d494.14297943816473!2d-72.23074525362803!3d7.774568841871422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666c9ed3613887%3A0x6ca9dcb33525e282!2sCorpoandes%20Tachira!5e0!3m2!1ses-419!2sve!4v1676941141553!5m2!1ses-419!2sve";
	const mapsDireccion2 = "!1m18!1m12!1m3!1d15817.553150014768!2d-72.21378947725353!3d7.641326453508469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6611990440ffc1%3A0x5c59b6ce99ef01ad!2sRelleno%20sanitario%20san%20josesito!5e0!3m2!1ses!2sve!4v1677087948483!5m2!1ses!2sve";
	const mapsDireccion = [mapsDireccion1, mapsDireccion2];
	direccion[i].addEventListener("click", () => {
		maps.innerHTML = `								<iframe
src="https://www.google.com/maps/embed?pb=${mapsDireccion[i]}"
width="800"
height="400"
style="border: 0"
allowfullscreen
loading="lazy"
referrerpolicy="no-referrer-when-downgrade"></iframe>`;
	});
}

//===== END - MAPS =====//

//===== START - NAVEGACION =====//
const card = document.querySelectorAll(".contact__right-text");

for (let i = 0; i < card.length; i++) {
	const button = document.querySelectorAll(".contact__right-text")[i];
	button.addEventListener("click", () => {
		const text = document.querySelectorAll(".contact__right-text")[i];
		const inputOculto = document.createElement("input");
		inputOculto.setAttribute("value", text.innerHTML);
		document.body.appendChild(inputOculto);
		inputOculto.select();
		document.execCommand("copy");
		document.body.removeChild(inputOculto);
		const alert = document.querySelector(".alert");
		alert.classList.add("alert__show");
		const alertText = document.querySelector(".alert__text");
		alertText.innerHTML = `Copiado: ${inputOculto.value}`;
		setTimeout(() => {
			alert.classList.remove("alert__show");
		}, 3000);
	});
}

//===== END - NAVEGACION =====//

//===== START - NAVEGACION =====//
const navDropdown = document.querySelector(".nav__items");
const navButton = document.querySelector(".button-menu");
const navMain = document.querySelector(".main");
const navExit = [navMain, navDropdown];

navButton.addEventListener("click", () => {
	navButton.classList.toggle("close");
	navDropdown.classList.toggle("show");
});

for (let i = 0; i < navExit.length; i++) {
	navExit[i].addEventListener("click", () => {
		navDropdown.classList.remove("show");
		navButton.classList.remove("close");
	});
}
//===== END - NAVEGACION =====//

//===== START - INDICADOR =====//
window.addEventListener("scroll", () => {
	const indicatorBar = document.querySelector(".nav__scroll-indicator-bar");
	const pageScroll =
		document.body.scrollTop || document.documentElement.scrollTop;

	const height =
		document.documentElement.scrollHeight - document.documentElement.clientHeight;
	const scrollValue = (pageScroll / height) * 100;
	indicatorBar.style.width = scrollValue + "%";
});
//===== END - INDICADOR =====//

//===== START - SLIDER DE QUIENES SOMOS =====//
const qsSliderContainer = document.querySelector("#qs__slider-container");
let qsSliderItems = document.querySelectorAll(".qs__slider-items");
let qsSliderItemsLast = qsSliderItems[qsSliderItems.length - 1];

const qsSliderBtnNext = document.querySelector("#qs__slider-btn--next");
const qsSliderBtnPrev = document.querySelector("#qs__slider-btn--prev");

qsSliderContainer.insertAdjacentElement("afterbegin", qsSliderItemsLast);

function Next() {
	let qsSliderItemsFirst = document.querySelectorAll(".qs__slider-items")[0];
	qsSliderContainer.style.marginLeft = "-200%";
	qsSliderContainer.style.transition = "all 0.5s";
	setTimeout(function () {
		qsSliderContainer.style.transition = "none";
		qsSliderContainer.insertAdjacentElement("beforeend", qsSliderItemsFirst);
		qsSliderContainer.style.marginLeft = "-100%";
	}, 500);
}

function Prev() {
	let qsSliderItems = document.querySelectorAll(".qs__slider-items");
	let qsSliderItemsLast = qsSliderItems[qsSliderItems.length - 1];
	qsSliderContainer.style.marginLeft = "0";
	qsSliderContainer.style.transition = "all 0.5s";
	setTimeout(function () {
		qsSliderContainer.style.transition = "none";
		qsSliderContainer.insertAdjacentElement("afterbegin", qsSliderItemsLast);
		qsSliderContainer.style.marginLeft = "-100%";
	}, 500);
}

qsSliderBtnNext.addEventListener("click", function () {
	Next();
});

qsSliderBtnPrev.addEventListener("click", function () {
	Prev();
});

setInterval(function () {
	Next();
}, 4000);

//===== END - SLIDER DE QUIENES SOMOS =====//
