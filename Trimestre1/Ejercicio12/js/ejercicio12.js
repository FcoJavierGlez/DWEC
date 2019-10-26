/**
 * Completar el código JavaScript proporcionado para que cuando se pinche sobre el enlace se muestre
 * completo el contenido de texto. Además, el enlace debe dejar de mostrarse después de pulsarlo por
 * primera vez. La acción de pinchar sobre un enlace forma parte de los "Eventos" de JavaScript que se
 * ven en el siguiente capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el enlace, se
 * ejecuta la función llamada muestra().
 * 
 * @author Fco Javier González Sabariego
 * @since 16/10/2019 || actualización: 25/10/2019
 */
{
    let elemento;
    let enlace;

    /**
     * Hace visible el fragmento de texto oculto y oculta el enlace que da acceso a mostrar el texto.
     */
    function muestra() {
        elemento = document.getElementById("adicional");
        elemento.className = "visible";
        this.className = "oculto";
    }

    let init = function() {
        enlace = document.getElementById("enlace");
        enlace.addEventListener("click",muestra);
    }

    window.addEventListener("load",init);
}
