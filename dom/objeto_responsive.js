const d = document;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    const breakpoint = matchMedia(mq); // Se puede resolver con el evento «resize». VER: 77. BOM: Propiedades y Eventos.

    const responsive = (e) => {
        e.matches
            ? d.querySelector(id).innerHTML = desktopContent
            : d.querySelector(id).innerHTML = mobileContent;

        // console.log(breakpoint, e.matches);
    };

    breakpoint.addListener(responsive); // Esto equivaldría al evento «resize»
    responsive(breakpoint); // Esto equivale a ejecutar la función responsiveMedia en el evento DOMContentLoaded
}