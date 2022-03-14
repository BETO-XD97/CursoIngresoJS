/*Roberto rocabado DIV E
SWITCH ej 2
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
//septiembre a febrero: "Ya pasamos el frio, ahora hace calor!!!."
//marzo, abril y mayo: "Falta poco para el invierno."
//junio y julio y agosto: "Abrigate que hace frio."


function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;
	
	switch (mes)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje = "Ya pasamos el frio, ahora hace calor";
			break;
		
		case "Marzo":
		case "Abril":
		case "Mayo":
			mensaje = "Falta poco para el invierno.";
			break;

		case "Junio":
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio."
			break;
		
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN