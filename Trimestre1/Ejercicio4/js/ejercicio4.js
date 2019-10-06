/**
 * Muestra comparaciones entre diferentes elementos de un array.
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019
 */

var valores = [true, 5, false, "hola", "adios", 2];

//Apartado 1: Comparamos caracteres
if (valores[3]>valores[4]) console.log("El mayor entre \"hola\" y \"adios\": "+valores[3]);
else console.log(valores[4]);

//Apartado 2: Operadores lógicos
console.log("Este valor, \"valores[0]\", es true: "+valores[0]);
console.log("Este valor, \"!valores[0]\", es la inversión de true: "+!valores[0]);
console.log("Este valor, \"valores[2]\", es false: "+valores[2]);
console.log("Este valor, \"!valores[2]\", es la inversión de false: "+!valores[2]);

//Apartado 3: Operaciones aritméticas:
console.log("Suma: 5+2 = "+(valores[1]+valores[5]));
console.log("Resta: 5-2 = "+(valores[1]-valores[5]));
console.log("Multiplicación: 5*2 = "+(valores[1]*valores[5]));
console.log("División: 5/2 = "+(valores[1]/valores[5]));
console.log("Módulo: 5%2 = "+(valores[1]%valores[5]));