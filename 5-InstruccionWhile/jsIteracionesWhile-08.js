/*Roberto rocabado DIV E
While ej8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero positivo o negativo: ");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt("Desea ingresar otro numero: si o no");
		respuesta = respuesta.toLowerCase();
		if (numeroIngresado >= 0) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		} else {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		
		while(respuesta != "si" && respuesta != "no") 
		{
			respuesta = prompt("ERROR!!! Desea ingresar otro numero: si o no");
			respuesta = respuesta.toLowerCase();
		}
		contador = contador + 1;	
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	

}//FIN DE LA FUNCIÓN