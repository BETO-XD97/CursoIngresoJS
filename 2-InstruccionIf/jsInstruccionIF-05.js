/*Roberto Rocabado DIV E
IF ej5 */
/* Al ingresar una edad solo debemos informar si la persona NO es adolescente. */

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if (edad < 13 || edad > 17) {
		alert("NO es un adolescente");
	}
}