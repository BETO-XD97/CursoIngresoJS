/*Roberto rocabado DIV E
While ej 6
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)// tiene que ser verdadero.
	{
		numeroIngresado = prompt("Ingrese 5 numeros: ");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;

}//FIN DE LA FUNCIÓN