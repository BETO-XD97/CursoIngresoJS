/*Roberto Rocabado DIV E
IF ej8 */

function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad >=18 && estadoCivil == "Soltero") {
		
			alert("Es soltero y NO es menor");
		
	}
}//FIN DE LA FUNCIÓN