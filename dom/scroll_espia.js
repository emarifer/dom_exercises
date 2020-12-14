const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll('section[data-scroll-spy]');
    const cb = (entries) => {
        // console.log('Entries', entries);

        entries.forEach((entry) => {
            // console.log('Entry', entry);
            // console.log('Entry', entries.length);

            const id = entry.target.getAttribute('id');
            // console.log(id);
            entry.isIntersecting
                ? d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active')
                : d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
        });
    };

    const observer = new IntersectionObserver(cb, {
        // root
        rootMargin: '-50%' // VER NOTA:
        // threshold: [ 0.5, 0.75]
    });
    // console.log(observer);

    $sections.forEach((el) => observer.observe(el));
}

// NOTA:
// https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API#Opciones_de_Intersection_observer