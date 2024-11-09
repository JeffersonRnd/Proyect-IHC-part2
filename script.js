// Esperar 3 segundos antes de ocultar la pantalla de carga y mostrar el contenido principal
window.onload = function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.querySelector('.menu');  // Selecciona el contenido principal
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');  // Ocultar la pantalla de carga
        mainContent.classList.remove('hidden'); // Mostrar el contenido de la página
    }, 3000);  // 3 segundos
};

tabInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    });
});

function mostrarMensaje(elemento) {
    const mensaje = elemento.querySelector('.mensaje');
    mensaje.style.display = 'block'; // Mostrar el mensaje

    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 2000);
}

function toggleModal() {
    const modal = document.getElementById('cartModal');

    // Alternar la visibilidad del modal
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}



