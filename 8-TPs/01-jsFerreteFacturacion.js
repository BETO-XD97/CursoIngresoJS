/*Roberto Rocabado DIV E
TPs ej1 */
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

    var precio1;
    var precio2;
    var precio3;
    var total;
    var promedio;
    var precioFinal;
    
function Sumar () 
{
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    total = precio1 + precio2 + precio3;

    alert("El total de la compra es de: " + "$ " + total);
}
function Promedio () 
{
	precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    promedio = (precio1 + precio2 + precio3)/3;

    alert("El promedio es de: " + "$ " + promedio);
}
function PrecioFinal () 
{
	precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    total = precio1 + precio2 + precio3;
    precioFinal = (total*0.21) + total;
    
    alert("El precion final con iva incluido es de: " + "$ " + precioFinal);
}