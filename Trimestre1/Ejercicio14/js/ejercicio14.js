/**
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 
 * 1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
 * 3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
 * 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
 * 
 * @author Fco Javier González Sabariego
 * @since 17/10/2019
 */
{
    let enlace1;
    let enlace2;
    let enlace3;
    let elemento;

    /**
     * Oculta el párrafo que hay sobre el enlace pulsado.
     * 
     * @param {*} elemento 
     */
    let oculta = function(elemento) {
        elemento.style.display = "none";
        this.innerHTML = "Mostrar contenidos";
    }

    /**
     * Muestra el párrafo oculto sobre el enlace pulsado.
     * 
     * @param {*} elemento 
     */
    let muestra = function(elemento) {
        elemento.style.display = "block";
        this.innerHTML = "Ocultar contenidos";
    }

    /**
     * Muestra y/o oculta el párrafo que hay sobre el enlace seleccionado.
     */
    let muestraOculta = function() {
        elemento = document.getElementById("contenidos_"+this.id);
        if(elemento.style.display=="" || elemento.style.display=="block") oculta(elemento);
        else muestra(elemento);
    }

    let init = function() {
        enlace1 = document.getElementById('1');
        enlace2 = document.getElementById('2');
        enlace3 = document.getElementById('3');
        enlace1.addEventListener("click", muestraOculta);
        enlace2.addEventListener("click", muestraOculta);
        enlace3.addEventListener("click", muestraOculta);
    }

    document.addEventListener("DOMContentLoaded",init);
}




