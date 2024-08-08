/*HEADER*/
document.getElementById('botoncambia').addEventListener('click', function() {
    const infoDiv = document.getElementById('informacion');
    if (infoDiv.classList.contains('informacion-visible')) {
        infoDiv.classList.remove('informacion-visible');
        infoDiv.classList.add('informacion-oculta');
    } else {
        infoDiv.classList.remove('informacion-oculta');
        infoDiv.classList.add('informacion-visible');
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const telefono = document.getElementById('numeroTelefono').innerText;
    navigator.clipboard.writeText(telefono).then(function() {
        alert('Número de teléfono copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el número de teléfono: ', err);
    });
});

document.getElementById('copyButton2').addEventListener('click', function() {
    const telefono = document.getElementById('numeroTelefono2').innerText;
    navigator.clipboard.writeText(telefono).then(function() {
        alert('Número de teléfono copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el número de teléfono: ', err);
    });
});
/*header*/

let animacion = gsap.timeline();
animacion.from(".p4", {duration: 2.3, x: -1000, opacity: 0, filter: "blur(10px)" })

.from(".p5", {duration: 2.5, x: 1000, opacity: 0, filter: "blur(10px)" }, 0)

/*MAIN*/
document.addEventListener('DOMContentLoaded', function() {
    const mainSection = document.getElementById('main-section');
    const imageContainer = document.getElementById('image-container');
    let lastImageTime = 0;
    let toggleImage = true; // Variable para alternar entre las dos imágenes

    if (mainSection) {
        mainSection.addEventListener('mousemove', function(event) {
            const currentTime = new Date().getTime();
            if (currentTime - lastImageTime >= 90) { // 1000 ms = 1 segundo
                createFallingImage(event.clientX, event.clientY, toggleImage);
                lastImageTime = currentTime;
                toggleImage = !toggleImage; // Alternar entre true y false
            }
        });
    }

    function createFallingImage(x, y, toggle) {
        const image = document.createElement('img');
        image.src = toggle ? '../img/esfera.png' : '../img/esfera2.png';  // Alternar entre las dos imágenes
        image.classList.add('falling-image');
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
        imageContainer.appendChild(image);

        gsap.to(image, {
            y: window.innerHeight,
            duration: 2,
            ease: "power1.in",
            onComplete: () => image.remove()
        });
    }
});
/*parallax*/

				
/*main*/



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


/*card*/
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const overlay = document.querySelector('.overlay');
    
    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            const isOpen = card.classList.contains('open');
            cards.forEach(c => c.classList.remove('open'));
            if (!isOpen) {
                card.classList.add('open');
                overlay.style.opacity = '1';
                overlay.style.visibility = 'visible';
            } else {
                overlay.style.opacity = '0';
                overlay.style.visibility = 'hidden';
            }
            event.stopPropagation();
        });
    });

    overlay.addEventListener('click', function() {
        cards.forEach(card => card.classList.remove('open'));
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    });
});
