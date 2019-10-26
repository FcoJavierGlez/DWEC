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
    let a;
    let boton;

    /**
     * Imprime el resultado.
     */
    let imprimeResultado = function () {
        a = document.getElementById("num").value;
        if (!Number.isInteger(Number.parseInt(a))) document.body.innerHTML += "<p><b>Debe introducir un número entero.</b></p>";
        else document.body.innerHTML += (a%2==0) ? "<p><b>" + a + " es par.</b></p>" : "<p><b>" + a + " es impar.</b></p>";
    }

    let init = function () {
        boton = document.getElementById("enviar");
        boton.addEventListener("click", imprimeResultado);
    }

    document.addEventListener("DOMContentLoaded", init);
}