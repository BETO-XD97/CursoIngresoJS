/* 
Roberto Rocabado DIV E
E/J ej4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Ingreso variable
	var nombreIngresado;

	//guardo dato
	nombreIngresado = prompt("ingrese su nombre");

	//muestra lo ingresado
	txtIdNombre.value = nombreIngresado;
	//document.getElementById("txtIdNombre").value = nombreIngresado;
}

