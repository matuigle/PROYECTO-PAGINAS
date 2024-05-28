
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
        y: 200
    }, 
    {
        opacity: 1,
        y: 0,
        duration: 5,
        scrollTrigger: {
            trigger: ".presentacion1", // Elemento que activa la animación
            start: "top 90%", // Iniciar la animación cuando el elemento está en 0% de la vista
            end: "top 70%", // Terminar la animación cuando el elemento está en 100% de la vista
            scrub: true // Smooth scrubbing, animación sincronizada con el scroll
        }
    }
);

// Crear una línea de tiempo con ScrollTrigger
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".tituloP", // Elemento que activa la animación
        start: "top 100%", // Iniciar la animación cuando el elemento está en 90% de la vista
        end: "top 50%", // Terminar la animación cuando el elemento está en 70% de la vista
        scrub: true // Smooth scrubbing, animación sincronizada con el scroll
    }
});

// Añadir la animación de .tituloP a la línea de tiempo
tl.fromTo(".tituloP", 
    {
        opacity: 0, 
        x: -200
    }, 
    {
        opacity: 1,
        x: 0,
        duration: 5
    }
);


// Añadir la animación de .carousel-container a la línea de tiempo
// Esta animación empezará automáticamente después de la animación de .tituloP
tl.fromTo(".carousel-container", 
    {
        opacity: 0, 
        x: 200
    }, 
    {
        opacity: 1,
        x: 0,
        duration: 3,
        delay: 0
    }
);

/* carousle*/
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    if (index >= totalItems) {
        currentIndex = totalItems - 1; 
    } else if (index < 0) {
        currentIndex = 0; 
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    if (currentIndex < totalItems - 1) {
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        showSlide(currentIndex - 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
const dropbtn = document.querySelector('.dropbtn');

const dropdownContent = document.querySelector('.dropdown-content');


dropbtn.addEventListener('click', () => {
 
  dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
});
