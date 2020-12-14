const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $players.length),
            winner = $players[random];

        // console.log($players, random, winner);

        return `El ganador es ${winner.textContent}`;
    };

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            const result = getWinner(selector);
            alert(result);
            console.log(result)
        }
    });
}


/* function getWinnerComment(selector) { // La consola de Firefox no admite arrow functions
    const $players = document.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random],
        result = winner.textContent.replace(/\n/g, '').trim();

    return `El ganador es: ${result}`;
};

getWinnerComment('ytd-comment-thread-renderer #author-text span'); */ // Comentarios en Youtube