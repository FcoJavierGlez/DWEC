/**
 * Completar el código JavaScript proporcionado para que:
 * 1. Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición
 * del puntero respecto del navegador y respecto de la página:
 * Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su
 * funcionamiento a partir de su código fuente.
 * 2. Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y
 * su información asociada:
 * Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de
 * fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el
 * color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve
 * a ser blanco.
 * 
 * Nota del autor: Aunque el ejercicio especifica dejar el color blanco al mostrar la información
 * de la posición del ratón le he dejado un tono gris claro para que se vea mejor dicho evento.
 * 
 * @author Fco Javier González Sabariego
 * @since 17/10/2019 || actualización: 25/10/2019
 */
{
    let elemento;

    /**
     * Imprime por pantalla la información pasada por parámetro en formato de array.
     * 
     * @param {Array} mensaje Información a imprimir en pantalla.
     */
    let muestraInformacion=function(mensaje) {
        elemento.innerHTML = '<h1>'+mensaje[0]+'</h1>';
        for(let i=1; i<mensaje.length; i++) elemento.innerHTML += '<p>'+mensaje[i]+'</p>';
    }

    /**
     * En caso de que se esté moviendo el ratón, captura sus coordenadas y las muestra por pantalla.
     * 
     * @param {*} evento 
     */
    let movimientoRaton = function(evento) {
        elemento.style.backgroundColor = '#F0F0F0';
        muestraInformacion(["Posición del ratón", "Navegador [x,y]: [" + evento.clientX + "," + evento.clientY + "]", "Página [x,y]: [" + evento.pageX + "," + evento.pageY + "]"]);
    }
    
    /**
     * En caso de hacer click, captura las coordenadas del ratón y las muestra por pantalla.
     * 
     * @param {*} evento 
     */
    let click = function(evento) {
        elemento.style.backgroundColor = '#FFFFCC';
        muestraInformacion(["Click", "Navegador [x,y]: [" + evento.clientX + "," + evento.clientY + "]", "Página [x,y]: [" + evento.pageX + "," + evento.pageY + "]"]);
    }

    /**
     * En caso de pulsar una tecla en el teclado muestra el caracter pulsado y su codificación por pantalla.
     * 
     * @param {*} evento 
     */
    let teclaPulsada = function(evento) {
        elemento.style.backgroundColor = '#CCE6FF';
        muestraInformacion(["Teclado", "Caracter: [" + evento.key + "]", "Código: [" + evento.code + "]"]);
    }

    /**
     * En función de si se mueve el puntero del ratón o si se hace click con el mismo o, en caso,
     * de pulsar una tecla del teclado se muestra por pantalla la información del evento.
     * 
     * @param {*} evento 
     */
    let informacion=function(evento) {
        if (evento.type=="mousemove") movimientoRaton(evento);
        else if (evento.type=="click") click(evento);
        else teclaPulsada(evento);
    } 

    let init=function() {
        elemento = document.getElementById("info");
        document.addEventListener("mousemove",informacion);
        document.addEventListener("click",informacion);
        document.addEventListener("keypress",informacion);
    }

    window.addEventListener("load",init);
}



