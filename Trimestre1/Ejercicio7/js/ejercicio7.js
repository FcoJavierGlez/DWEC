/**
 * Muestra el factorial de un número n:
 * 
 * Actualización: script introducido en un bloque, creación de la función anónima factorial, creación del escuchador de eventos
 * para ejecutar el script tras la carga del árbol DOM.
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019 || actualización: 24/10/2019
 */
{
    /**
     * Calcula el factorial del número introducido por parámetro.
     * 
     * @param {number} a Número a calcular su factorial
     */
    let factorial = function(a) {
        if(a==0) return 1;
        for (let i=a-1; i>1; i--) a*=i;
        return a;
    }
    
    let init = function() {
        let a=Number.parseInt(prompt("Inserte un número entero: "));
        document.body.innerHTML += "<p><b>El factorial de "+a+" es: "+factorial(a)+"</b></p>";
    }

    window.addEventListener("load", init);
}