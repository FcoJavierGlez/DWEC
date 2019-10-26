/**
 * Muestra los meses del año almacenados previamente en un array.
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019
 */
{
    let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio",
                "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    
    let documento;

    let init = function() {
        documento = document.body;
        for(let i in meses) documento.innerHTML += "<p><b>"+meses[i]+"</b></p>";
    }

    document.addEventListener("DOMContentLoaded",init);
}