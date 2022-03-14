/*Roberto rocabado DIV E
Parcial 2018 ej 1
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{
    var anchoRectangulo;
    var largoRectangulo;
    var perimetro;

    anchoRectangulo = prompt("Ingrese el ancho del rectangulo: ");
    anchoRectangulo = parseInt(anchoRectangulo);
    while(isNaN(anchoRectangulo) || anchoRectangulo < 0 )
    {
        anchoRectangulo = prompt("ERROR! Ingrese el ancho del rectangulo: ");
        anchoRectangulo = parseInt(anchoRectangulo);
    }

    largoRectangulo = prompt("Ingrese el largo del rectangulo: ");
    largoRectangulo = parseInt(largoRectangulo);
    while(isNaN(largoRectangulo) || anchoRectangulo <0 )
    {
        largoRectangulo = prompt("ERROR! Ingrese el largo del rectangulo: ");
        largoRectangulo = parseInt(largoRectangulo);
    }

    perimetro = (anchoRectangulo * 2) + (largoRectangulo * 2);

    alert("El perimetro es de: " + perimetro);
}
