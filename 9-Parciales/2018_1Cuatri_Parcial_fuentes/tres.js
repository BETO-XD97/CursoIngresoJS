/*Roberto rocabado DIV E
Parcial ej 3
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var precioDescuento;

    precio = prompt("Ingrese el precio del producto: ");
    precio = parseInt(precio);

    while(isNaN(precio) || precio < 0)
    {
        precio = prompt("ERROR! Ingrese el precio del producto: ");
        precio = parseInt(precio);
    }

    porcentajeDescuento = prompt("Ingrese el porcentaje del descuento: ");
    porcentajeDescuento = parseInt(porcentajeDescuento);

    while(isNaN(porcentajeDescuento) || porcentajeDescuento < 0)
    {
        porcentajeDescuento = prompt("ERROR! Ingrese el porcentaje del descuento: ");
        porcentajeDescuento = parseInt(porcentajeDescuento);
    }

    precioDescuento = precio * (porcentajeDescuento/100);
    precioFinal = precio - precioDescuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
