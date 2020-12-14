const d = document;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);


    addEventListener('scroll', (e) => { // Se puede hacer desde window o la etiqueta <html> (document)
        // console.log(pageYOffset, d.documentElement.scrollTop); // El primera da la distancia por window; el segundo accede por la etiqueta <html>
        const scrollTop = pageYOffset || d.documentElement.scrollTop; // Por si un navegador antiguo no detectara «pageYOffset»

        scrollTop > 500
            ? $scrollBtn.classList.remove('hidden')
            : $scrollBtn.classList.add('hidden');


    });

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            scrollTo({
                behavior: 'smooth',
                top: 0,
                // left: 0 // Si hubiese barra horizontal de desplazamiento
            });
        }
    });
}

/* 
pageYOffset o scrollTop son propiedades y métodos, respectivamente, vinculados a «window» y, por tanto, no es necesario escribir window.pageYOffset o window.scrollTop
 */