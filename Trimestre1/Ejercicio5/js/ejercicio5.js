/**
 * Completar la estructura de condicionales para que muestre los siguientes mensajes:
 * 
 * Actualización: todo el script está contenido ahora en un bloque {}
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019 || actualización: 24/10/2019
 */
{
    let numero1 = 5;
    let numero2 = 8;
    let documento;

    let init = function() {
        documento = document.body;
        if(!(numero1>numero2)) documento.innerHTML += "<br/><p>"+numero1+" no es mayor que "+numero2+".</p>";
        if(numero2>0) documento.innerHTML += "<p>"+numero2+" es positivo.</p>";
        if(numero1<0 || numero1!=0) documento.innerHTML += "<p>"+numero1+" es negativo o distinto de cero.</p>";
        if(!(++numero1>=numero2)) documento.innerHTML += "<p>Incrementar en 1 unidad el valor de "+numero1+" no lo hace mayor o igual que "+numero2+".</p>";
    }
    
    document.addEventListener("DOMContentLoaded",init);
}