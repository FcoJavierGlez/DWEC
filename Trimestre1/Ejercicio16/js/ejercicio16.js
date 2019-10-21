/**
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas
 * definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para
 * determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador()
 * proporcionada.
 * 
 * @author Fco Javier González Sabariego
 * @since 17/10/2019
 */
{
    let elemento;
    let dimensiones = [];
    let posicion;
    let tamannoVent;

    let posiciones=function(posicion, tamannoVent) {
        elemento = document.getElementById("info");
        if (posicion[0] < (tamannoVent[0] / 2) && posicion[1] < (tamannoVent[1] / 2))
            elemento.innerHTML = '<p style="text-align:center"><b>Arriba izquierda</b></p>';
        else if (posicion[0] > (tamannoVent[0] / 2) && posicion[1] < (tamannoVent[1] / 2))
            elemento.innerHTML = '<p style="text-align:center"><b>Arriba derecha</b></p>';
        else if (posicion[0] < (tamannoVent[0] / 2) && posicion[1] > (tamannoVent[1] / 2))
            elemento.innerHTML = '<p style="text-align:center"><b>Abajo izquierda</b></p>';
        else
            elemento.innerHTML = '<p style="text-align:center"><b>Abajo derecha</b></p>';
    }

    let tamanoVentanaNavegador=function(){
        if(typeof(window.innerWidth) == 'number') 
            dimensiones = [window.innerWidth, window.innerHeight];
        return dimensiones;
    }

    let informacion=function(event) {
        let evento = event;
        posicion = [evento.clientX, evento.clientY];
        tamannoVent = tamanoVentanaNavegador();
        if(evento.type=="click") 
            posiciones(posicion, tamannoVent);
    }

    window.onload=function() {
        document.onclick = informacion;
    }

}