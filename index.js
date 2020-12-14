// ************ 80. DOM: Ejercicios Prácticos ************

import scrollTopButton from "./dom/boton_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilters from "./dom/filtro_busqueda.js";
import getGeolocation from "./dom/geolocalizacion.js";
import { default as hamburgerMenu } from "./dom/menu_hamburguesa.js";
import speechReader from "./dom/narrador.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { alarm, digitalClock } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import smartVideo from "./dom/video_inteligente.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
    alarm('assets/alarm.mp3', '#activar-alarma', '#desactivar-alarma');
    countdown('#countdown', 'Dec 04, 2020 09:10:25', 'Feliz Cumpleaños, Enrique!! 🤓');
    scrollTopButton('.scroll-top-btn');
    responsiveMedia(
        '#youtube',
        '(min-width:1024px)',
        `<a href="https://youtu.be/2SetvwBV-SU" target="_blank" rel="noopener">Ver Vídeo</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        '#gmaps',
        '(min-width:1024px)',
        `<a href="https://goo.gl/maps/orHTSbS8VeS9wDZB7" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5984203233083!2d-5.983898184504972!3d37.375677942792684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126e9dd8d8ffff%3A0xd7f47fb33b633e39!2sCalle%20Cruz%2C%201%2C%2041013%20Sevilla!5e0!3m2!1ses!2ses!4v1607160164053!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    );
    responsiveTester('responsive-tester');
    userDeviceInfo('#user-device');
    webCam('#webcam');
    getGeolocation('#geolocation');
    searchFilters('.card-filter', '.card');
    draw('#winner-btn', '.player');
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
});

darkTheme('.dark-theme-btn', 'dark-mode'); // dark-mode no necesita punto porque solo la añadiremos con «add» y la quitaremos con «remove». ".dark-theme-btn" es el selector del botón y siempre requiere punto. Por otro lado, sacamos la invocación de esta función del evento DOMContentLoaded porque ella misma añade dicho evento en su interior. Así puede consultar al localStorage para conocer el estado del dark-mode

// 'Feb 04, 2021 03:30:25'

networkStatus();
speechReader();