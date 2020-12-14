export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;

    d.addEventListener('click', (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) { // Cualquier elemento hijo que esté en el área del botón, incluidas las 3 rayitas de la hamburguesa
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelBtn).classList.toggle('is-active');
        }

        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove('is-active'); // Se repliega el panel
            d.querySelector(panelBtn).classList.remove('is-active'); // Se resetea el botón
        }
    });
}

/* 
https://www.youtube.com/watch?v=Do3KYX1r1Ow&list=PLvq-jIkSeTUYVLwbW09GGgG2EOFJeNWmQ&index=2
https://jonsuh.com/hamburgers/
https://cdnjs.com/libraries/hamburgers
https://github.com/colorjs/javascript-yellow // JavaScript Yellow
https://developer.mozilla.org/es/docs/Web/Events/DOMContentLoaded
*/