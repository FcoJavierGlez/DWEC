/**
 * Solicita al usuario el número de su dni y, tras validarlo, le indica cual es su letra:
 * 
 * Actualización: script insertado en un bloque y rediseño del ejercicio para usar un pattern para validar el formato del DNI y entrada
 * de datos a través de un input.
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019 || actualización. 24/10/2019
 */
{
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
        'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    const pattern = new RegExp('^([0-9]{8})([A-Z])$');
    let dni;
    let boton;


    /**
     * Comprueba que el formato del DNI introducido coincide con el formato "99999999X".
     * 
     * @param {String} dni 
     */
    let validaPattern = function (dni) {
        return (pattern.test(dni));
    }

    /**
     * Comprueba que la letra del dni pasado como parámetro es correcta.
     * 
     * @param {String} dni 
     */
    let validaDni = function (dni) {
        const coincidencias = pattern.exec(dni);
        return (coincidencias[2] == letras[coincidencias[1] % 23]);
    }

    /**
     * Imprime el resultado de validar el DNI
     */
    let imprimeResultado = function() {
        dni = document.getElementById("dni").value;
        if (validaPattern(dni)) document.body.innerHTML += (validaDni(dni)) ?
            "<p><b>El DNI "+dni+" es correcto</b></p>" : "<p><b>El DNI correcto sería: " + dni.substring(0, 8) + letras[dni.substring(0, 8) % 23] + "</b></p>";
        else document.body.innerHTML += "<p><b>El DNI "+dni+" no posee un formato correcto</b></p>";
    }

    let init = function () {
        boton = document.getElementById("enviar");
        boton.addEventListener("click",imprimeResultado);
    }

    document.addEventListener("DOMContentLoaded", init);
}


