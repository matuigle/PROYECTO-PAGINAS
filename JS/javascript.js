
let animacion = gsap.timeline();
animacion.from(".p3", {duration: 0.5, opacity: 0, ease: "power1.inOut" })
.from(".p3", {duration: 0.5, filter: "blur(10px)", ease: "power1.inOut", delay: 0.2 })

.from(".head", {duration: 2.5, opacity: 0, filter: "blur(10px)" }, 0)

.from(".p1", { duration: 1.5, x: -100, y: -100, opacity: 0, filter: "blur(10px)" }, 0.5)

.from(".p2", { duration: 1.5, x: 100, y: 100, opacity: 0, filter: "blur(10px)" }, 0.5)

.from(".p4", {duration: 2.5, x:-1000, opacity: 0, filter: "blur(10px)" }, 0.5)

.from(".p5", {duration: 2.5, x:1000, opacity: 0, filter: "blur(10px)" }, 0)