const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener('submit', (e) => {

        if (e.target === $form) { // También podemos hacer la comparación con el propio elemento
            e.preventDefault(); // Para evitar la acción por defecto del evento submit del formulario, que es enviar la información. Al no estar indicado el parámetro  «action» del formulario, que es la dirección a la que enviar la información, ésta se autoprocesa recargando la página y apareciendo los datos en la barra de direcciones
            // alert('Formulario enviado');

            tester = open(
                $form.direccion.value,
                'tester', 
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
                );
            $form.reset(); // Se reseta el formulario después de hacer la operación
        }
    });

    d.addEventListener('click', (e) => {
        if (e.target === $form.cerrar) tester.close();
    });
}