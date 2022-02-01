/*
Roberto Rocabado DIV E
E/S ej7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//declaro variables
var numero1;
var numero2;
var resultado;

function sumar()
{	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	resultado = numero1 + numero2;

	//ventana emergente
	alert("El resultado de la suma es: " + resultado);
}

function restar()
{
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	resultado = numero1 - numero2;

	//ventana emergente
	alert("El resultado de la resta es: " + resultado);
}

function multiplicar()
{ 
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	resultado = numero1 * numero2;

	//ventana emergente
	alert("El resultado de la multiplicacion es: " + resultado);
}

function dividir()
{
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	resultado = numero1 / numero2;

	//condicional
	if (numero2>0) {
		//ventana emergente
		alert("El resultado de la division es: " + resultado);
	}else{
		//ventana emergente
		alert("No se puede dividir por cero o menor");
	}
}

