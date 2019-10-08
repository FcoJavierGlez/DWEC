/**
 * Solicita al usuario el número de su dni y, tras validarlo, le indica cual es su letra:
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019
 */

let letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
            'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let dni=Number.parseInt(prompt("Inserte su dni sin la letra"));

if(dni>99999999 || dni<10000000 || !Number.isInteger(dni)) alert("Dni inválido.");
else alert("Su dni es: "+dni+letras[dni%23]);