/*Roberto rocabado DIV E
SWITCH ej 8
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace calor!!!";
			break;
		
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace frio!!!";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN