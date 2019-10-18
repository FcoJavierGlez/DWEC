/**
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas
 * definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para
 * determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador()
 * proporcionada.
 * 
 * @author Fco Javier González Sabariego
 * @since 17/10/2019
 */

let tamanoVentanaNavegador=function(){
    // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
    let dimensiones = [];
    if(typeof(window.innerWidth) == 'number') 
        dimensiones = [window.innerWidth, window.innerHeight];
    return dimensiones;
}

let informacion=function(event) {
    let evento = event;
    let posicion = [evento.clientX, evento.clientY];
    let tamannoVent = tamanoVentanaNavegador();
    if(evento.type=="click") {
        if(posicion[0]<(tamannoVent[0]/2) && posicion[1]<(tamannoVent[1]/2)) 
            document.getElementById("info").innerHTML = '<p style="text-align:center"><b>Arriba izquierda</b></p>';
        else if (posicion[0]>(tamannoVent[0]/2) && posicion[1]<(tamannoVent[1]/2))
            document.getElementById("info").innerHTML = '<p style="text-align:center"><b>Arriba derecha</b></p>';
        else if (posicion[0]<(tamannoVent[0]/2) && posicion[1]>(tamannoVent[1]/2))
            document.getElementById("info").innerHTML = '<p style="text-align:center"><b>Abajo izquierda</b></p>';
        else
            document.getElementById("info").innerHTML = '<p style="text-align:center"><b>Abajo derecha</b></p>';
    }
}

document.onclick = informacion;