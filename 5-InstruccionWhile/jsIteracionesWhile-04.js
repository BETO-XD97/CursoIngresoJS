/*Roberto rocabado DIV E
While ej4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	
	numeroIngresado = parseInt(numeroIngresado);

	while (isNaN(numeroIngresado) || (numeroIngresado < 0 || numeroIngresado > 9) )
	{
		numeroIngresado = prompt("Error. Reingrese un numero entre 0 y 9");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresado + " Es valido"; 

}//FIN DE LA FUNCIÓN