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
    /**
     * Devuelve si la cadena pasada por parámetro contiene solo mayúsculas, solo minúsculas o ambas.
     * 
     * @param {String} a Cadena pasada por parámetro
     * @return {String} Información insertada en un párrafo para ser usada con un innerHTML
     */
    let info=function (a) {
        if (a==a.toUpperCase()) return "<p><b>La cadena \""+a+"\" está en mayúsculas.</b></p>";
        else return (a==a.toLowerCase()) ? "<p><b>La cadena \""+a+"\" está en minúsculas.</b></p>" : "<p><b>La cadena \""+a+"\" combina mayúsculas y minúsculas.</b></p>";
    }
    
    let init = function() {
        let a=prompt("Inserte una cadena de caracteres.");
        document.body.innerHTML+=info(a);
    }

    window.addEventListener("load",init);
}