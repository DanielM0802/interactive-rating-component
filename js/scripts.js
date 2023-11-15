const formulario = document.querySelector('form');

console.log(formulario.addEventListener('submit', procesarFormulario ) )


function procesarFormulario(evento){

    evento.preventDefault();

    console.log('procesando formulario')
    console.log(evento)

    //buscar la forma de saber que boton selecciono el usuario

}