const d = document;

let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        $limitsBall = $ball.getBoundingClientRect(),
        $limitsStage = $stage.getBoundingClientRect();

    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log($limitsBall, $limitsStage);

    switch (e.keyCode) {
        // izquierda
        case 37:
            if ($limitsBall.left > $limitsStage.left) {
                e.preventDefault(); // Desactiva el comportamiento por defecto de las fechas solo mientras la pelota esté en el escenario
                x--;
            }
            break;
        // arriba
        case 38:
            if ($limitsBall.top > $limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        // derecha
        case 39:
            if ($limitsBall.right < $limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        // abajo
        case 40:
            if ($limitsBall.bottom < $limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

export function shortcuts(e) {
    /* console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`Ctrl: ${e.ctrlKey}`);
    console.log(`Alt: ${e.altKey}`);
    console.log(`Shift: ${e.shiftKey}`);
    console.log(e); */

    if (e.key === 'a' && e.altKey) {
        alert('Has lanzado una alerta con el teclado');
    }

    if (e.key === 'c' && e.altKey) {
        confirm('Has lanzado una confirmación con el teclado');
    }

    if (e.key === 'p' && e.altKey) {
        prompt('Has lanzado un aviso con el teclado');
    }
}