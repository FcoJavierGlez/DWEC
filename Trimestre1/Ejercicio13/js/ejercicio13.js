/**
 * Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada
 * vez que se pulsa sobre el botón. Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la
 * lista existente. Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre un botón forma
 * parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio, sólo se
 * debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
 * 
 * @author Fco Javier González Sabariego
 * @since 16/10/2019
 */

let annade = function () {
    let texto=document.createTextNode("Elemento de prueba");
    let elemento=document.createElement("li");

    elemento.appendChild(texto);

    let lista=document.getElementById("lista")
    lista.appendChild(elemento);

    let nuevoElemento = "<li>Texto de prueba</li>";
    lista.innerHTML = lista.innerHTML + nuevoElemento;
}
