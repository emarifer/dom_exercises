const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTimer;

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnPlay)) {
            clockTimer = setInterval(() => {
                const clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true; // Deshabilitamos el botón para impedir que se pulse mientras funcione el reloj
        }

        if (e.target.matches(btnStop)) {
            clearInterval(clockTimer);
            d.querySelector(clock).innerHTML = null; // Para eliminar de la vista el reloj
            d.querySelector(btnPlay).disabled = false; // Rehabilitamaos el botón Play
        }
    });
}

export function alarm(sound, btnPlay, btnStop) {
    let alarmTimer;
    const $alarm = d.createElement('audio'); // Creamos etiqueta  «audio» del DOM
    $alarm.src = sound

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnPlay)) {
            alarmTimer = setTimeout(() => {
                $alarm.volume = 0.1; // Reducimos el volumen al 10%
                $alarm.play();
            }, 2000);

            e.target.disabled = true;
        }

        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTimer);
            $alarm.pause(); // Pausamos el sonido
            $alarm.currentTime = 0; // El volvemos al inicio del audio
            d.querySelector(btnPlay).disabled = false; // Rehabilitamaos el botón Play 
        }
    });
}

// Volumen en la etiqueta «audio»:
// https://stackoverflow.com/questions/37115491/how-to-set-volume-of-audio-object