/**
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la
 * siguiente información:
 * 
 * 1. Número de enlaces de la página
 * 2. Dirección a la que enlaza el penúltimo enlace
 * 3. Numero de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 * 
 * @author Fco Javier González Sabariego
 * @since 10/10/2019 || actualización: 25/10/2019
 */
{
    let totalEnlaces = document.getElementsByTagName("a").length;
    let penultimoEnlace = document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 2];
    let enlaces = document.getElementsByTagName("a");

    let informacion;

    /**
     * Cuenta el total de enlaces con el valor en el atributo href de "http://prueba/"
     * 
     * @param {*} array 
     */
    let getEnlacesPrueba = function (array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].href == "http://prueba/")
                total++;
        }
        return total;
    }
    
    /**
     * Imprime la información de los enlaces.
     */
    let imprimeInfo = function() {
        informacion.innerHTML += "<p><b>El número total de enlaces es: " + totalEnlaces + "</b></p>";
        informacion.innerHTML += "<p><b>El penúltimo enlace es: " + penultimoEnlace + "</b></p>";
        informacion.innerHTML += "<p><b>El total de enlaces 'http://prueba' es: " + getEnlacesPrueba(enlaces) + "</b></p>";
        informacion.innerHTML += "<p><b>El total de enlaces en el tercer párrafo es: " + document.getElementsByTagName("p")[2].getElementsByTagName("a").length + "</b></p>";
    }

    let init = function() {
        informacion = document.getElementById("informacion");
        imprimeInfo();
    }

    document.addEventListener("DOMContentLoaded", init);
}


