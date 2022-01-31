/*
Roberto Rocabado DIV E
E/S ej3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declarar variable
	var nombreIngresado;

	//guardamos el nombre
	nombreIngresado = document.getElementById("txtIdNombre").value;

	/*otra forma de ingresar--->
	nombreIngresado = txtIdNombre.value;*/


	//ventana emergente
	alert("Su nombre es " + nombreIngresado);

}


