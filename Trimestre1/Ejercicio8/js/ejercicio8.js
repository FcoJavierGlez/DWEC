/**
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
 * resultado devuelto por la función.
 * 
 * @author Fco Javier González Sabariego
 * @since 08/10/2019
 */

let a=Number.parseInt(prompt("Inserte un número entero."));

//Si la variable es número comprueba paridad
(Number.isInteger(a)) ? esPar(a) : console.log(a+" no es un número entero.");


/**
 * Devuelve valor booleano indicando si el número de entrada es par o no.
 * 
 * @param {number} a Valor numérico a comprobar su paridad.
 * @return {boolean} Valor de la comprobación.
 */
function esPar(a) {
    return (a%2==0) ? console.log(a+" es par.") : console.log(a+" es impar.")
}