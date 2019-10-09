/**
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
 * palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
 * palíndromo complejo: "La ruta nos aporto otro paso natural".
 * 
 * @author Fco Javier González Sabariego
 * @since 09/10/2019
 */

let original=prompt("Inserte una cadena de caracteres.");


(esPalindromo(original)) ? console.log("Es palíndromo.") : console.log("No es palíndromo.");




/**
 * Devuelve valor booleano indicando si la cadena introducida como parámetro es o no un palíndromo.
 * 
 * @param {String} cadena Cadena a comprobar si es palíndromo
 * @return {Boolean} Valor de la comprobación
 */
function esPalindromo(cadena) {
    cadena=cadena.toUpperCase().replace(/ /g,"").replace(/Á/g,"A").replace(/É/g,"E").replace(/Í/g,"I").replace(/Ó/g,"O").replace(/Ú/g,"U");
    return (cadena==reverseString(cadena)) ? true : false;
}


/**
 * Devuelve una cadena invertida de la cadena introducida como parámetro.
 * 
 * @param {String} a Cadena de entrada
 * @return {String} Cadena invertida devuelta
 */
function reverseString(a) {
    let salida="";
    for (let i=a.length; i>0; i--) 
        salida+=a.substring(i-1,i);
    return salida;
}