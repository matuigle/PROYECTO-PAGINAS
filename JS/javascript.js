
let animacion = gsap.timeline();
animacion.from(".p3", {duration: 0.5, opacity: 0, ease: "power1.inOut" })
.from(".p3", {duration: 0.5, filter: "blur(10px)", ease: "power1.inOut", delay: 0.2 })

.from(".head", {duration: 2.5, opacity: 0, filter: "blur(10px)" }, 0)

.from(".p1", { duration: 1.5, x: -100, y: -100, opacity: 0, filter: "blur(10px)" }, 0.5)

.from(".p2", { duration: 1.5, x: 100, y: 100, opacity: 0, filter: "blur(10px)" }, 0.5)

.from(".p4", {duration: 2.3, x: -1000, opacity: 0, filter: "blur(10px)" }, 0.5)

.from(".p5", {duration: 2.5, x: 1000, opacity: 0, filter: "blur(10px)" }, 0)

.from(".p6", {duration: 2.5, x: -300, y: -500, opacity: 0, filter: "blur(10px)" }, 0.8)

.from(".p7", {duration: 2.5, x: 300, y: 500, opacity: 0, filter: "blur(10px)" }, 0.8)

gsap.registerPlugin(MotionPathPlugin);

gsap.set(".p8", {x: 500, y: -500,});
gsap.to(".p8", {duration: 2.5, ease: "power1.inOut",motionPath: {path: [{x: 300, y: -200}, {x: 50, y: 70}, {x: 0, y: 0},],curviness: 1.50, }})
gsap.set(".p9", {x: -500, y: -300,});
gsap.to(".p9", {duration: 2.5, ease: "power1.inOut",motionPath: {path: [{x: -20, y: 30}, {x: 0, y: 0},],curviness: 1.50, }});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".presentacion1", 
    {
        opacity: 0, 
        y: 100
    }, 
    {
        opacity: 1,
        y: 0,
        duration: 4,
        scrollTrigger: {
            trigger: ".presentacion1", // Elemento que activa la animación
            start: "top 80%", // Iniciar la animación cuando el elemento está en 80% de la vista
            end: "top 100%", // Terminar la animación cuando el elemento está en 100% de la vista
            scrub: true // Smooth scrubbing, animación sincronizada con el scroll
        }
    }
);

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});