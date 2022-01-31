/*
Roberto Rocabado DIV E
E/J ej5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaracion de variables
	var nombreIngresado;
	var edadIngresada;

	//ingreso de datos
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	//ventana emergente
	alert("Su nombre es " + nombreIngresado + " y su edad es " + edadIngresada);

}


