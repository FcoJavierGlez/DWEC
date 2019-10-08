/**
 * Solicita al usuario el número de su dni y, tras validarlo, le indica cual es su letra:
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019
 */

let letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
            'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let dni=prompt("Inserte su dni con la letra");


if(dni.length==9) {
    if((Number.parseInt(dni.substring(0,dni.length-1))>10000000 
        && Number.parseInt(dni.substring(0,dni.length-1))<99999999) 
        && dni.substring(8,dni.length)==letras[Number.parseInt(dni.substring(0,dni.length-1))%23]) {
            alert("DNI correcto.");
        }
        else 
            alert("Su dni correcto es: "+dni.substring(0,dni.length-1)+letras[Number.parseInt(dni.substring(0,dni.length-1))%23]);
}
else
    alert("Su DNI es erróneo.");