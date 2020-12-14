const d = document,
    n = navigator;

export default function webCam(id) {
    const $video = d.querySelector(id);

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices
            .getUserMedia({ video: true, audio: false }) // Activar el audio produce mucho acople
            .then((stream) => {
                console.log(stream);
                $video.srcObject = stream;
                $video.play();
            })
            .catch((err) => {
                $video.insertAdjacentHTML('beforebegin', `<p>¡Sucedió el siguiente error!: <mark>${err}</mark></p>`)
                console.log(`¡Sucedió el siguiente error: ${err}`)
            });
    }
}