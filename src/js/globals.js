import checkDevice from '../js/checkDevice'
import lenisScroll from "../js/lenisScroll"
import scrollMarkers from "../js/scrollMarkers"
import smartMenu from "../js/smartMenu"
import menuMobile from '../js/menuMobile'

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CustomEase } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(CustomEase);


// import Animations from '../js/animations'
// import Rellax from "rellax";
// import Rellax from "rellax";

/*/////////////////////////////////////////////////////////////////////*/
/*///////////////////////////// GET BASIC /////////////////////////////*/
/*/////////////////////////////////////////////////////////////////////*/

function getBasic() {

	const html = document.querySelector('html');
	const body = document.querySelector('body');
	const header = document.querySelector('header');
	let winW = document.documentElement.clientWidth;
	let winH = document.documentElement.clientHeight;
	let docH = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	let headerH = header.offsetHeight;
	const device = checkDevice();

	/* Set Device on HTML tag */
	html.dataset.device = device;

	let basic = {
		html: html,
		body: body,
		winW: winW,
		winH: winH,
		docH: docH,
		device: device,
		header: header,
		headerH: headerH
	}

	return basic;

}

/* Storage Constant Device Values */
const basic = getBasic();
const html = basic.html;
const body = basic.body;
const device = basic.device;
let winH = basic.winH;
let winW = basic.winW;
let docH = basic.docH;
let header = basic.header;
let headerH = basic.headerH;

/*/////////////////////////////////////////////////////////////////////*/
/*//////////////////////////////// GSAP ////////////////////////////////*/
/*/////////////////////////////////////////////////////////////////////*/

function fetchGsap(){

	const image = document.querySelector('#team img');

			const observerOptions = {
					root: null, // viewport
					rootMargin: '0px',
					threshold: [0.16, 0.4] // 40% and 40%
			};

			const observerCallback = (entries) => {
					entries.forEach(entry => {
						
							if (entry.intersectionRatio > 0.16) {
									image.classList.add('active');
							} 
							// else {
							// 		image.classList.remove('active');
							// }
					});
			};

			const observer = new IntersectionObserver(observerCallback, observerOptions);
			
			// Wait for the image to load before observing
			image.onload = () => observer.observe(image);

			// If the image is already cached and loaded
			if (image.complete) {
					observer.observe(image);
			}

			

	// let tl = gsap.timeline({
	// 	// yes, we can add it to an entire timeline!
	// 	scrollTrigger: {
	// 			trigger: '#team',
	// 			toggleActions: 'play reverse play reverse',
	// 			start: '15% 80%', 
	// 			end: '100% 70%', 
	// 			// scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	// 			markers: true,
	// 	}
	// });

	// return tl.to( image, { 
	// 	width: "calc( 100% + var(--container-gap) * 2 )", 
	// 	marginLeft: "calc(-1 * var(--container-gap) )",
	// 	borderRadius: "0", 
	// 	duration: .5, 
	// 	ease: "ease-in-out",
	// });

}

/*/////////////////////////////////////////////////////////////////////*/
/*///////////////// EJECUTAR FUNCIONES EN EVENTOS /////////////////////*/
/*/////////////////////////////////////////////////////////////////////*/

/* Ejecutar el getBasic si cambia el tamaño del navegador o rota el dispositivo */
window.addEventListener("resize", getBasic);
window.addEventListener("orientationchange", getBasic);

document.addEventListener('scroll', function () {
	scrollMarkers()
	smartMenu()
});

document.addEventListener('DOMContentLoaded', function () {
	menuMobile()
	fetchGsap()
	// Animations();
});

document.addEventListener('astro:after-swap', function () {
	menuMobile()
	fetchGsap()
});


/*/////////////////////////////////////////////////////////////////////*/
/*//////////////////// ALERT GIRAR DISPOSITIVO ////////////////////////*/
/*/////////////////////////////////////////////////////////////////////*/

if ( device != 'desktop' ) {

	function rotateDeviceHorizontal() {
		if (window.orientation === 0 || window.orientation === 180) {
			// Bloquear la orientación vertical
			alert("Por favor, gire su dispositivo para visualizar correctamente nuestro sitio.");
		}
	}

	function rotateDeviceVertical() {
		if (window.orientation === 90 || window.orientation === -90) {
			// Bloquear la orientación horizontal
			alert("Por favor, gire su dispositivo para visualizar correctamente nuestro sitio.");
		}
	}

	if ( device == 'bigTablet' ) {

		rotateDeviceHorizontal();

		window.addEventListener("orientationchange", function () {
			rotateDeviceHorizontal();
		});

	}

	if ( device == 'mobile' && device != 'bigTablet' ) {

		rotateDeviceVertical()

		window.addEventListener("orientationchange", function () {
			rotateDeviceVertical()
		});

	}

}

	lenisScroll();
