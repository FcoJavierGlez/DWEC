/**
 * Muestra el factorial de un número n:
 * 
 * Actualización: script introducido en un bloque, creación de la función anónima factorial, creación de escuchadores de eventos.
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019 || actualización: 24/10/2019
 */
{
    let a;
    let boton;

    /**
     * Calcula el factorial del número introducido por parámetro.
     * 
     * @param {number} a Número a calcular su factorial
     */
    let factorial = function (a) {
        if (a == 0) return 1;
        for (let i = a - 1; i > 1; i--) a *= i;
        return a;
    }

    /**
     * Imprime en pantalla el resultado del factorial.
     */
    let imprimeResultado = function () {
        a = document.getElementById("num").value;
        document.body.innerHTML += "<p><b>El factorial de " + a + " es: " + factorial(a) + "</b></p>";
    }

    let init = function () {
        boton = document.getElementById("enviar");
        boton.addEventListener("click", imprimeResultado);
    }

    document.addEventListener("DOMContentLoaded", init);
}