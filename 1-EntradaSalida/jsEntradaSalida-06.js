/*
Roberto Rocabado DIV E
E/J ej6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variables
	var n1;
	var n2;
	var suma;

	//ingreso de datos
	n1 = document.getElementById("txtIdNumeroUno").value;
	n1 = parseInt(n1);
	n2 = document.getElementById("txtIdNumeroDos").value;
	n2 = parseInt(n2);
    suma = n1 + n2;
	//ventana emergente
	alert("El resultado es: " + suma);
}

