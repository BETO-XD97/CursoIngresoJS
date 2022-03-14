/*Roberto rocabado DIV E
While ej3
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750") 
	{
		claveIngresada = prompt("ERROR! Reingrese el número clave.");
	}
	alert("Bienvenido");
}//FIN DE LA FUNCIÓN
