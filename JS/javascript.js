/*codigo para fade up:

window.addEventListener('scroll', function(){

    var imagen = document.querySelectorAll('.fadeup')[0];
    var altura = window.innerHeight/1.3;
    var distancia = imagen.getBoundingClientRect().top;
    imagen.classList.add('transform_up')
    if (distancia <= altura){
        imagen.classList.add('aparece');
    }
    else{
        imagen.classList.remove('aparece');
    }
})

*/