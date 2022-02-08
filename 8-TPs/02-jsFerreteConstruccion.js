/*Roberto Rocabado DIV E 
TPs ej2 */
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

    var largo;
    var ancho;
    var radio;
    var perimetro;
    var cantAlambre;
    var circulo;
    var superficie;
    var cemento;
    var cal;
function Rectangulo () 
{
    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    perimetro = (ancho + largo)*2;
    cantAlambre = perimetro *3;

    alert("La cantida de alambre a utilizar es de: " + cantAlambre);
}
function Circulo () 
{
	radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    
    circulo = (radio*3.14)*2;
    cantAlambre = circulo*3;

    alert("La cantida de alambre a utilizar es de: " + cantAlambre);
}
function Materiales () 
{
    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    superficie = largo * ancho;
    cemento = superficie * 2;
    cal = superficie * 3;

    alert("Para una superficie de " + superficie + " se necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}