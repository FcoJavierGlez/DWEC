/**
 * Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada
 * vez que se pulsa sobre el botón. Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la
 * lista existente. Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre un botón forma
 * parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio, sólo se
 * debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
 * 
 * @author Fco Javier González Sabariego
 * @since 16/10/2019 || actualización: 25/10/2019
 */
{
    let button_annade;
    let texto;
    let elemento;
    let lista;
    let nuevoElemento;

    /**
     * Añade dos nuevos elementos a la lista de la página. El primero  crea nuevo elementos y los va anidando, el segundo
     * se integra a la propia página como un texto enconsertado en una etiqueta <li></li>.
     */
    let annade = function () {
        texto=document.createTextNode("Elemento introducido generando elementos y anidándolos"); //Elemento anidado
        elemento=document.createElement("li");

        elemento.appendChild(texto);

        lista=document.getElementById("lista")
        lista.appendChild(elemento);

        nuevoElemento = "<li>Elemento introducido con innerHTML</li>";  //Elemento tipo texto encosetado en una etiqueta <li></li>
        lista.innerHTML = lista.innerHTML + nuevoElemento;
    }

    let init = function() {
        button_annade = document.getElementById("button_annade");
        button_annade.addEventListener("click",annade);
    }

    window.addEventListener("load",init);
}

