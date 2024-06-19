/*HEADER*/
document.getElementById('toggleButton').addEventListener('click', function() {
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
