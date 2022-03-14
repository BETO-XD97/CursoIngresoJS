/*Roberto rocabado DIV E
While ej 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var ingresoPrimerNumero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	
	respuesta='si';
	ingresoPrimerNumero = false //bandera o flag
	numeroMinimo;
	numeroMaximo;

	while(respuesta == "si")
	{
		do 
		{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);	
		} while (isNaN(numeroIngresado) == true);

		if(numeroMaximo < numeroIngresado || ingresoPrimerNumero == false)
		{
			numeroMaximo = numeroIngresado;
		}

		if(numeroMinimo > numeroIngresado || ingresoPrimerNumero == false)
		{
			numeroMinimo = numeroIngresado;
			ingresoPrimerNumero = true; //bajo la bandera
		}

		respuesta = prompt("Desea continuar ingresando numeros? Si o No");
		respuesta = respuesta.toLowerCase();
		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Error! Desea continuar ingresando numeros? Si o No");
			respuesta = respuesta.toLowerCase();
		}
  
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;

	document.getElementById("txtIdMinimo").value = numeroMinimo;
	
}//FIN DE LA FUNCIÓN