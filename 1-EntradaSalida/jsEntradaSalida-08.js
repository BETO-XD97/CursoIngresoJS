/*
Roberto Rocabado DIV E
E/S ej8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro variables
	var numero1;
	var numero2;
	var resto;

	//ingreso de datos y convierto a entero
	numero1 = document.getElementById("txtIdNumeroDividendo").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDivisor").value;
	numero2 = parseInt(numero2);

	//condicional
	if (numero2>0) {	
		resto = numero1 % numero2;
		alert("El resto es de " + resto);
		}else{
		alert("Ingrese un numero mayor a cero");
		}
	
	}


