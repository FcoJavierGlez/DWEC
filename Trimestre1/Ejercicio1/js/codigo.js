/**
 * Muestra un mensaje, de tipo popup. 
 * Actualización: el mensaje ahora se muestra por un console.log() y el contenido del script se encuentra dentro de un bloque {}
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019  || actualizado: 24/10/2019
 */
{
    let init = function() {
        document.body.innerHTML+="<p><b>Soy el primer script.</b></p>";
    }

    window.addEventListener("load", init);
}