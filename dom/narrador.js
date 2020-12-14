const d = document;

export default function speechReader() {
    const $speechSelect = d.querySelector('#speech-select'),
        $speechTextarea = d.querySelector('#speech-text'),
        $speechBtn = d.querySelector('#speech-btn'),
        speechMessage = new SpeechSynthesisUtterance();

    let voices = [];

    d.addEventListener('DOMContentLoaded', (e) => { // VER NOTA DE ABAJO:

        const allVoicesObtained = new Promise((resolve, reject) => {
            voices = speechSynthesis.getVoices();

            if (voices.length !== 0) {
                resolve(voices);
            } else {
                speechSynthesis.addEventListener('voiceschanged', (e) => {
                    voices = speechSynthesis.getVoices();
                    resolve(voices);
                });
            }
        });

        allVoicesObtained.then((voices) => {
            // console.log("All voices:", voices)
            voices.forEach((voice) => {
                const $option = d.createElement('option');
                $option.value = voice.name;
                $option.textContent = `${voice.name} - ${voice.lang}`;
    
                $speechSelect.appendChild($option);
            });
        });
    });

    d.addEventListener('change', (e) => {
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
            // console.log(speechMessage);
        }
    });

    d.addEventListener('click', (e) => {
        if (e.target === $speechBtn) {
            speechMessage.text = $speechTextarea.value;
            speechSynthesis.speak(speechMessage);
        }
    });
}

/* 
Esto hay que hacerlo así en Firefox porque, a diferencia de Chrome, no se produce el evento onvoiceshanged al cargar la página. Por tanto, hay que usar un promesa que espere a que se produzca el evento. Ver:
https://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-web-speech-api#59786665
 */