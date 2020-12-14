const d = document,
    ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll('[data-dark]');

    // console.log($selectors);
    const moon = '🌙',
        sun = '☀️';

    const ligthMode = () => {
        $selectors.forEach((element) => element.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem('theme', 'light');
    };

    const darkMode = () => {
        $selectors.forEach((element) => element.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem('theme', 'dark');
    };

    d.addEventListener('click', (e) => {

        if (e.target.matches(btn)) {
            // console.log($themeBtn.textContent);
            $themeBtn.textContent === moon
                ? darkMode()
                : ligthMode();
        }
    });

    d.addEventListener('DOMContentLoaded', (e) => {
        // alert('Hola desde la función darkTheme');
        // console.log(ls.getItem('theme'));
        if (!ls.getItem('theme')) ls.setItem('theme', 'light');

        ls.getItem('theme') === 'light'
            ? ligthMode()
            : darkMode();
    });
}