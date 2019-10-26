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

    /**
     * Añade al documento dos párrafos con información de la zona de la ventana del navegador
     * en la que se ha hecho click.
     * 
     * @param {*} evento 
     */
    let informacion = function (evento) {
        let texto = (evento.clientY < (window.innerHeight / 2)) ?  '<p>Arriba</p>' : '<p>Abajo</p>';
        texto += (evento.clientX < (window.innerWidth / 2)) ? '<p>Izquierda</p>' : '<p>Derecha</p>';
        elemento.innerHTML = texto;
    }
    
    let init = function() {
        elemento = document.getElementById("info");
        document.addEventListener("click", informacion);
    }

    document.addEventListener("DOMContentLoaded", init);
}