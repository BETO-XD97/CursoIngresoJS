/*
Roberto Rocabado DIV E
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()
{
	//declaracion de variable
	var importe;
	var resultado;

	//ingreso de datos
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	resultado = importe - ((importe*25)/100);

	//se muestra en cuadro de resultado
	document.getElementById("txtIdResultado").value = resultado;

}*/

/* Roberto Rocabado DIV 
E/S ej10 bis 
lo anterior mas.
se debe pedir el % por prompt

mostrar por alert el importe, el descuento, el importe con Descuento
"su importe es 1000 , el Descuento es de 250 y su importe con descuento es 750"
*/

function mostrarAumento()
{
	//declaracion de variable
	var importe;
	var resultado;
	var porcentaje;
	var descuento;

	//ingreso de datos
	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);
	porcentaje= prompt("Ingrese porcentaje del descuento: ");
	porcentaje = parseInt(porcentaje);
	descuento= importe * (porcentaje/100);
	resultado = importe - descuento;
	
	
	alert("Su importe es de " + importe + " el descuento es de " + descuento + " y el importe con descuento es de " + resultado);

}
