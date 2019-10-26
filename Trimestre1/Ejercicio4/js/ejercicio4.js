/**
 * Muestra comparaciones entre diferentes elementos de un array.
 * 
 * Actualización: todo el script está contenido ahora dentro de un bloque {}
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019 || actualización: 24/10/2019
 */
{
   let valores = [true, 5, false, "hola", "adios", 2];
   let documento;
   
   /**
    * Apartado 1: Compara caracteres
    * 
    * @param {*} documento 
    */
   let comparaCaracteres = function(documento) {
        documento.innerHTML += "<br/><p><b>Apartado 1: Compara caracteres</b></p>";
        documento.innerHTML += (valores[3]>valores[4]) ? "<p>El mayor entre \"hola\" y \"adios\": "+valores[3]+"</p>" : "<p>El mayor entre \"hola\" y \"adios\": "+valores[4]+"</p>";
   }

   /**
    * Apartado 2: Operadores lógicos
    * 
    * @param {*} documento 
    */
   let comparaOpLog = function(documento) {
        documento.innerHTML += "<br/><p><b>Apartado 2: Operadores lógicos</b></p>";
        documento.innerHTML += "<p>Este valor, \"valores[0]\", es true: "+valores[0]+"</p>";
        documento.innerHTML += "<p>Este valor, \"!valores[0]\", es la inversión de true: "+!valores[0]+"</p>";
        documento.innerHTML += "<p>Este valor, \"valores[2]\", es false: "+valores[2]+"</p>";
        documento.innerHTML += "<p>Este valor, \"!valores[2]\", es la inversión de false: "+!valores[2]+"</p>";
   }

   /**
    * Apartado 3: Operaciones aritméticas
    * 
    * @param {*} documento 
    */
   let comparaOpArit = function(documento) {
        documento.innerHTML += "<br/><p><b>Apartado 3: Operaciones aritméticas</b></p>";
        documento.innerHTML += "<p>Suma: 5+2 = "+(valores[1]+valores[5])+"</p>";
        documento.innerHTML += "<p>Resta: 5-2 = "+(valores[1]-valores[5])+"</p>";
        documento.innerHTML += "<p>Multiplicación: 5*2 = "+(valores[1]*valores[5])+"</p>";
        documento.innerHTML += "<p>División: 5/2 = "+(valores[1]/valores[5])+"</p>";
        documento.innerHTML += "<p>Módulo: 5%2 = "+(valores[1]%valores[5])+"</p>"; 
   }

    let init = function() {
        documento = document.body;
        comparaCaracteres(documento);
        comparaOpLog(documento);
        comparaOpArit(documento);
    }

    document.addEventListener("DOMContentLoaded",init);
}
