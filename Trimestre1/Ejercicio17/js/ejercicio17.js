/**
 * Ejercicio 17
 * 
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún
 * puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas
 * horizontales cuando se haya llegado al máximo número de caracteres.
 * 
 * @author Fco Javier González Sabariego
 * @since 23/10/2019
 */
{
    let posIni;

    let init = function () {
        let textarea = document.getElementById("texto");
        let parrafo = document.getElementById("contador");
        document.addEventListener("keydown", function (evento) {
            if (evento.key.length == 1)
                insertaTexto(evento, textarea);
            else
                teclasEspeciales(evento, textarea);  //Delete, BackSpace, ArrowLeft, ArrowRight
            parrafo.innerHTML = (100 - textarea.value.length) + "/100";
        });
    }
    
    /**
     * Inserta texto, en el textarea de la página, en función de la posición del cursor
     * y de si hay texto seleccionado para sobreescribirlo.
     * 
     * @param {Object} evento 
     * @param {*} textarea 
     */
    let insertaTexto = function(evento, textarea) {
        if (textarea.selectionStart == textarea.value.length)
            textarea.value += (limita(textarea)) ? "" : evento.key;
        else if (textarea.selectionStart!=textarea.selectionEnd)
            sobreEscribir(evento, textarea);
        else 
            textoIntermedio(evento, textarea);
    }
    
    /**
     * Limita la capacidad de escribir en el textarea en función de si posee 100 o
     * más caracteres.
     * 
     * @param {*} textarea 
     */
    let limita = function (textarea) {
        return (textarea.value.length >= 100) ? true : false;
    }

    /**
     * Sobreescribe el texto seleccionado.
     * 
     * @param {Object} evento 
     * @param {*} textarea 
     */
    let sobreEscribir = function(evento, textarea) {
        posIni = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, posIni) + evento.key + textarea.value.substring(textarea.selectionEnd, textarea.value.length);
        textarea.selectionStart = textarea.selectionEnd = posIni+1; //Posición cursor tras sobreescribir
    }
    
    /**
     * Introduce texto donde se ubique el cursor.
     * 
     * @param {Object} evento 
     * @param {*} textarea 
     */
    let textoIntermedio = function(evento, textarea) {
        posIni = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, posIni) + evento.key + textarea.value.substring(posIni, textarea.value.length);
        textarea.selectionStart = textarea.selectionEnd = posIni+1; //Posición cursor tras escribir
    }
    
    /**
     * Ejecuta la acción de la tecla especial pulsada (Delete, BackSpace, ArrowLeft, ArrowRight)
     * 
     * @param {Object} evento 
     * @param {*} textarea 
     */
    let teclasEspeciales = function (evento, textarea) {
        switch (evento.key) {
            case 'Delete':
                accionDelete(textarea);
                break;
            case 'Backspace':
                accionBackSpace(textarea);
                break;
            case 'ArrowLeft':
                accionArrowLeft(textarea);
                break;
            case 'ArrowRight':
                accionArrowRight(textarea);
                break;
        }
    }

    /**
     * Acción de pulsar el botón delete. Si hay texto seleccionado lo borra, en caso contrario borra
     * el caracter inmediatamente posterior a la posición del cursor.
     * 
     * @param {*} textarea 
     */
    let accionDelete = function (textarea) {
        if (textarea.selectionStart == textarea.selectionEnd)
            del(textarea);
        else
            borraSeleccion(textarea);
    }
    
    /**
     * Acción de pulsar el botón backspace. Si hay texto seleccionado lo borra, en caso contrario borra
     * el caracter inmediatamente anterior a la posición del cursor.
     * 
     * @param {*} textarea 
     */
    let accionBackSpace = function(textarea) {
        if (textarea.selectionStart == textarea.selectionEnd)
            backSpace(textarea);
        else
            borraSeleccion(textarea);
    }
    
    /**
     * Desplaza el cursor a la derecha.
     * 
     * @param {*} textarea 
     */
    let accionArrowRight = function(textarea) {
        if (textarea.selectionEnd == textarea.value.length) return;
        textarea.selectionStart += 1; //Posición cursor
    }
    
    /**
     * Desplaza el cursor a la izquierda.
     * 
     * @param {*} textarea 
     */
    let accionArrowLeft = function(textarea) {
        if (textarea.selectionStart == 0) return;
        textarea.selectionStart = textarea.selectionEnd -= 1; //Posición cursor
    }

    /**
     * Borra el caracter posterior a la posición del cursor.
     * 
     * @param {*} textarea 
     */
    let del = function (textarea) {
        posIni = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, posIni) + textarea.value.substring(posIni + 1, textarea.length);
        textarea.selectionStart = textarea.selectionEnd = posIni; //Posición cursor tras borrado
    }

    /**
     * Borra la selección de texto.
     * 
     * @param {*} textarea 
     */
    let borraSeleccion = function (textarea) {
        posIni = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, posIni) + textarea.value.substring(textarea.selectionEnd, textarea.length);
        textarea.selectionStart = textarea.selectionEnd = posIni; //Posición cursor tras borrado
    }

    /**
     * Borra el caracter anterior a la posición del cursor.
     * 
     * @param {*} textarea 
     */
    let backSpace = function (textarea) {
        if(textarea.selectionStart==0) return;
        posIni = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, posIni - 1) + textarea.value.substring(posIni, textarea.value.length);
        textarea.selectionStart = textarea.selectionEnd = posIni - 1; //Posición cursor tras borrado
    }

    document.addEventListener("DOMContentLoaded", init);
}