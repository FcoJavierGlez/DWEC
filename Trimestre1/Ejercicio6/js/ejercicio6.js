/**
 * Solicita al usuario el número de su dni y, tras validarlo, le indica cual es su letra:
 * 
 * Actualización: script insertado en un bloque y rediseño del ejercicio ahora usa un pattern para validar el formato del DNI.
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019 || actualización. 24/10/2019
 */
{
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
        'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    const pattern = new RegExp('^[0-9]{8}[A-Z]$');

    /**
     * Comprueba que el formato del DNI introducido coincide con el formato "99999999X".
     * 
     * @param {String} dni 
     */
    let validaPattern = function(dni) {
        if(pattern.test(dni)) return true;
        return false;
    }

    /**
     * Comprueba que la letra del dni pasado como parámetro es correcta.
     * 
     * @param {String} dni 
     */
    let validaDni = function(dni) {
        if (dni.substring(8,9)==letras[dni.substring(0,8)%23]) return true;
        return false;
    }

    let init = function () {
        let dni = prompt("Inserte su dni con la letra");
        if (validaPattern(dni)) document.body.innerHTML += (validaDni(dni)) ? 
            "<p><b>Su DNI es correcto</b></p>" : "<p><b>Su DNI correcto sería: "+dni.substring(0,8)+letras[dni.substring(0,8)%23]+"</b></p>";
        else document.body.innerHTML += "<p><b>Su DNI no posee un formato correcto</b></p>";

    }

    window.addEventListener("load", init);
}
