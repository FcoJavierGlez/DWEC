/**
 * Muestra el factorial de un número n:
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019
 */

var a=5;

console.log("El factorial de "+a+" es: ");

for (let i=a-1; i>1; i--) 
    a*=i;


console.log(a);