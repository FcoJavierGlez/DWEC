/**
 * Completar la estructura de condicionales para que muestre los siguientes mensajes:
 * 
 * Actualización: todo el script está contenido ahora en un bloque {}
 * 
 * @author Fco Javier González Sabariego
 * @since 06/10/2019 || actualización: 24/10/2019
 */
{
    let numero1 = 5;
    let numero2 = 8;
    
    if(!(numero1>numero2)) 
        alert("numero1 no es mayor que numero2");
    if(numero2>0) 
        alert("numero2 es positivo");
    if(numero1<0 || numero1!=0) 
        alert("numero1 es negativo o distinto de cero");
    if(!(++numero1>=numero2)) 
        alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}