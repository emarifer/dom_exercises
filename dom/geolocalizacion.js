const d = document,
    n = navigator;

export default function getGeolocation(id) {
    const $div = d.querySelector(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000, // Le decimos que espere 5 segundos para tomar lectura de geolocalización
            maximumAge: 0 // Le decimos que no guarde en caché la lectura anterior
        },
        success = (position) => {
            const coords = position.coords;
            console.log(position);

            $div.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.es/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
        },
        error = (err) => {
            $div.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
            console.log(`Error ${err.code}: ${err.message}`);
        };

    n.geolocation.getCurrentPosition(success, error, options);
}