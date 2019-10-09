/**
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * 
 * @author Fco Javier González Sabariego
 * @since 09/10/2019
 */

let a=prompt("Inserte una cadena de caracteres.");
let minusc=false;
let mayusc=false;

infoCadena(a);



function infoCadena(a) {
    for (let i=0; i<a.length; i++) 
        (a.substring(i,i+1)==a.substring(i,i+1).toUpperCase()) ? mayusc=true : minusc=true;
    imprimeInfo();
}

function imprimeInfo() {
    if (mayusc && minusc) console.log("Los caracteres en la cadena \""+a+"\" son una combinación de mayúsculas y minúsculas.");
    else (mayusc) ? console.log("En la cadena \""+a+"\" todos los caracteres son mayúsculas.") 
        : console.log("En la cadena \""+a+"\" todos los caracteres son minúsculas.");
}