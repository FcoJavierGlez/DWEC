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
 * @author Fco Javier González Sabariego
 * @since 17/10/2019
 */

let muestraInformacion=function(mensaje) {
    document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
    for(let i=1; i<mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
    }
}

let informacion=function(event) {
    let evento = event || window.event;

    if (evento.type=="mousemove") {
        document.getElementById("info").style.backgroundColor='#FFF';
        muestraInformacion(["Movimiento del ratón","Navegador [x,y]: ["+evento.clientX+","+evento.clientY+"]","Página [x,y]: ["+evento.pageX+","+evento.pageY+"]"]);
    } else if (evento.type=="click") {
        document.getElementById("info").style.backgroundColor='#FFFFCC';
        muestraInformacion(["Click","Navegador [x,y]: ["+evento.clientX+","+evento.clientY+"]","Página [x,y]: ["+evento.pageX+","+evento.pageY+"]"]);
    } else if (evento.type=="keypress") {
        document.getElementById("info").style.backgroundColor='#CCE6FF';
        muestraInformacion(["Teclado","Caracter: ["+String.fromCharCode(evento.charCode)+"]","Código: ["+evento.keyCode+"]"]);
    }
} 

document.onmousemove = informacion;
document.onkeypress = informacion;
document.onclick = informacion;