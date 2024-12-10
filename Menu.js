document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            const isExpanded = menu.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
            menuBtn.setAttribute('aria-label', isExpanded ? 'Cerrar menú' : 'Abrir menú');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
                menu.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Abrir menú');
            }
        });

        // Cerrar menú al hacer clic en un enlace
        menu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Abrir menú');
            });
        });
    }
});
