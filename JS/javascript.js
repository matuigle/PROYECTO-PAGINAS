
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

gsap.set(".p8", {
    x: 500, 
    y: -500,
});

gsap.to(".p8", {
    duration: 2.5, 
    ease: "power1.inOut",
    motionPath: {
        path: [
            {x: 300, y: -200}, 
            {x: 50, y: 70}, 
            {x: 0, y: 0},
        ],
        curviness: 1.50, 
    }
})

gsap.set(".p9", {
    x: -500, 
    y: -300,
});

gsap.to(".p9", {
    duration: 2.5, 
    ease: "power1.inOut",
    motionPath: {
        path: [
            {x: -20, y: 30}, 

            {x: 0, y: 0},
        ],
        curviness: 1.50, 
    }
});


