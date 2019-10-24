/**
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
 * resultado devuelto por la función.
 * 
 * Actualización: introducido el script en un bloque {} y añadido un escuchador de eventos 
 * al objeto window para que el script se ejecute tras cargar el árbol DOM.
 * 
 * @author Fco Javier González Sabariego
 * @since 08/10/2019 || actualización: 24/10/2019
 */
{
    /**
     * Imprime por consola indicando si el número de entrada es par o no.
     * 
     * @param {number} a Valor numérico a comprobar su paridad.
     */
    function esPar(a) {
        return (a%2==0) ? a+" es par." : a+" es impar.";
    }
    
    let init = function() {
        let a=Number.parseInt(prompt("Inserte un número entero."));
        
        document.body.innerHTML+=(Number.isInteger(a)) ? 
            "<p><b>"+esPar(a)+"</b></p>" : "<p><b>"+console.log(a+" no es un número entero.")+"</b></p>"; //Si la variable es número comprueba paridad
    }

    window.addEventListener("load",init);
}