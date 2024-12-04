document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('menu-btn'); // Botón hamburguesa
    const navList = document.getElementById('menu'); // Lista de navegación

    // Mostrar/ocultar el menú al hacer clic en el botón
    navToggle.addEventListener('click', function () {
        navList.classList.toggle('active'); // Cambiar clase activa para mostrar/ocultar menú
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav') && navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });
});
