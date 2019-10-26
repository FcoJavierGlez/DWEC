/**
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * 
 * Actualización: script introducido en un bloque {}, simplificación del ejercicio usando solo comparaciones entre cadenas en vez de caracteres.
 * 
 * @author Fco Javier González Sabariego
 * @since 09/10/2019 || actualización: 24/10/2019
 */
{
    let a;
    let boton;

    /**
     * Devuelve si la cadena pasada por parámetro contiene solo mayúsculas, solo minúsculas o ambas.
     * 
     * @param {String} a Cadena pasada por parámetro
     * @return {String} Información insertada en un párrafo para ser usada con un innerHTML
     */
    let imprimeResultado=function () {
        a = document.getElementById("texto").value;
        if (a==a.toUpperCase()) document.body.innerHTML += "<p><b>La cadena \"" + a + "\" está en mayúsculas.</b></p>";
        else document.body.innerHTML += (a==a.toLowerCase()) ? "<p><b>La cadena \"" + a + "\" está en minúsculas.</b></p>" : "<p><b>La cadena \"" + a + "\" combina mayúsculas y minúsculas.</b></p>";
    }
    
    let init = function() {
        boton = document.getElementById("enviar");
        boton.addEventListener("click",imprimeResultado);
    }

    document.addEventListener("DOMContentLoaded",init);
}