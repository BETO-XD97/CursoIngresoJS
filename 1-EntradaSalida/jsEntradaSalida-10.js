/*
Roberto Rocabado DIV E
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaracion de variable
	var importe;
	var resultado;

	//ingreso de datos
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	resultado = importe - ((importe*25)/100);

	//se muestra en cuadro de resultado
	txtIdResultado.value = resultado;

}
