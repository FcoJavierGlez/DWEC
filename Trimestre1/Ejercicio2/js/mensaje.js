/**
 * Muestra un mensaje, de tipo popup, habiendo almacenado previamente en variables el contenido del mismo.
 * 
 * Actualización: Ahora el mensaje se muestra como nuevos elementos dentro del árbol DOM, todo el contenido del script está dentro de un bloque {}
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019 || actualización: 24/10/2019
 */
{
    let documento;

    let init = function() {
        documento = document.body;
        documento.innerHTML += "<p><b>Hola mundo!!</b></p>";
        documento.innerHTML += "<p><b>Qué fácil es incluir \'comillas simples\'</b></p>";
        documento.innerHTML += "<p><b>Qué fácil es incluir \"comillas dobles\"</b></p>";
    }

    document.addEventListener("DOMContentLoaded",init);
}