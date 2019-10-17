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
 * @since 10/10/2019
 */

let penultimoEnlace=document.getElementsByTagName("a");

console.log("El número total de enlaces es: "+document.getElementsByTagName("a").length);
console.log("El penúltimo enlace es: "+document.getElementsByTagName("a")[document.getElementsByTagName("a").length-2]);
console.log("El total de enlaces 'http://prueba' es: "+getEnlacesPrueba(document.getElementsByTagName("a")));
console.log("El total de enlaces en el tercer párrafo es: "+document.getElementsByTagName("p")[2].getElementsByTagName("a").length);




function getEnlacesPrueba(array) {
    let total=0;
    for (let i=0; i<array.length; i++) {
        if (array[i].href=="http://prueba/")
            total++;
    }
    return total;
}

