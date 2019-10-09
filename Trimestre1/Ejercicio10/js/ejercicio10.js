/**
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
 * palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
 * palíndromo complejo: "La ruta nos aporto otro paso natural".
 * 
 * @author Fco Javier González Sabariego
 * @since 09/10/2019
 */

let original=prompt("Inserte una cadena de caracteres.");

original=original.toUpperCase().replace(/ /g,"").replace(/Á/g,"A").replace(/É/g,"E").replace(/Í/g,"I").replace(/Ó/g,"O").replace(/Ú/g,"U");

(esPalindromo(original)) ? console.log("Es palíndromo.") : console.log("No es palíndromo.");




function reverseString(a) {
    let salida="";
    for (let i=a.length; i>0; i--) 
        salida+=a.substring(i-1,i);
    return salida;
}


function esPalindromo(a) {
    return (a==reverseString(a)) ? true : false;
}