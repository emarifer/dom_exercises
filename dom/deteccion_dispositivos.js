const d = document,
    n = navigator,
    ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.querySelector(id),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.android() || this.ios() || this.windows();
            }
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows/i),
            any: function () {
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera() ||
                    this.ie() ||
                    this.edge()
                );
            }
        };
    // console.log(ua);
    // console.log(isMobile.android());
    // console.log(isMobile.ios());
    // console.log(isDesktop.any());
    // console.log(isBrowser.any());

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Platform: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Browser: <b>${isBrowser.any()}</b></li>
        </ul>    
    `;

    /* Contenido exclusivo */

    if (isBrowser.firefox()) $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`;
    if (isDesktop.linux()) $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;

    /* Redirecciones */

    if (isMobile.android()) location.href = 'https://play.google.com/store?hl=es&gl=US';
}