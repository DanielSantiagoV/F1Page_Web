document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos necesarios
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    const body = document.querySelector('body');
    const menuLinks = document.querySelectorAll('.main-menu a');

    // Verificamos que los elementos principales existan
    if (menuToggle && mainMenu) {

        // Función principal para abrir y cerrar el menú
        const toggleMenu = () => {
            menuToggle.classList.toggle('open'); // Anima el ícono
            mainMenu.classList.toggle('open');   // Muestra/oculta el menú
            body.classList.toggle('menu-open');  // Bloquea/desbloquea el scroll
        };

        // Evento de clic para el botón de hamburguesa
        menuToggle.addEventListener('click', toggleMenu);

        // Mejora: Cierra el menú al hacer clic en un enlace
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainMenu.classList.contains('open')) {
                    toggleMenu();
                }
            });
        });

        // Mejora: Cierra el menú con la tecla 'Escape'
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mainMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    }
});