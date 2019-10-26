/**
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
 * palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
 * palíndromo complejo: "La ruta nos aporto otro paso natural".
 * 
 * Actualización, script introducido en un bloque {}
 * 
 * @author Fco Javier González Sabariego
 * @since 09/10/2019 || actualización 24/10/2019
 */
{
    let boton;
    let original;

    /**
     * Devuelve valor booleano indicando si la cadena introducida como parámetro es o no un palíndromo.
     * 
     * @param {String} cadena Cadena a comprobar si es palíndromo
     * @return {Boolean} Valor de la comprobación
     */
    let esPalindromo = function(cadena) {
        cadena = cadena.toUpperCase().replace(/ /g, "").replace(/Á/g, "A").replace(/É/g, "E").replace(/Í/g, "I").replace(/Ó/g, "O").replace(/Ú/g, "U");
        return (cadena == reverseString(cadena));
    }

    /**
     * Devuelve una cadena invertida de la cadena introducida como parámetro.
     * 
     * @param {String} a Cadena de entrada
     * @return {String} Cadena invertida devuelta
     */
    let reverseString = function(a) {
        let salida = "";
        for (let i = a.length; i > 0; i--) salida += a.substring(i - 1, i); return salida;
    }

    /**
     * Imprime el resultado
     */
    let imprimeResultado = function() {
        original = document.getElementById("texto").value;
        document.body.innerHTML += (esPalindromo(original)) ? "<p><b>La cadena \""+original+"\" es palíndromo.</b></p>" : "<p><b>La cadena \""+original+"\" no es palíndromo.</b></p>";
    }

    let init = function () {
        boton = document.getElementById("enviar");
        boton.addEventListener("click",imprimeResultado);
    }

    window.addEventListener("load", init);
}