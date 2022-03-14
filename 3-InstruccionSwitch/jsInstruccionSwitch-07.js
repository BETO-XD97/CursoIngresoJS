/*Roberto rocabado DIV E
SWITCH ej 7
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destino;
	var

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje = "Punto cardinal: Oeste.";
			break;
		
		case "Cataratas":
			mensaje = "Punto cardinal: Norte";
			break;

		case "Mar del plata":
			mensaje = "Punto cardinal: Este.";
			break;

		case "Ushuaia":
			mensaje = "Punto cardinal: Sur.";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN