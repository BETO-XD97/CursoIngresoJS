/*
Roberto Rocabado DIV E
E/S ej9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro variables
	var sueldo;
	var resultado;

	//ingreso de datos
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	resultado = sueldo + ((sueldo*10)/100);

	//se muestra en cuadro de resultado
	txtIdResultado.value = resultado;
}
