/*Roberto rocabado DIV E
While ej10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.(x)
2-Suma de los positivos.(x)
3-Cantidad de positivos.(x)
4-Cantidad de negativos.(x)
5-Cantidad de ceros.(x)
6-Cantidad de números pares.(x)
7-Promedio de positivos.(x)
8-Promedios de negativos.(x)
9-Diferencia entre positivos y negativos, (positvos-negativos). (x)
*/

function mostrar()
{
	//declarar contadores y variables 
	var respuesta = "si";
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorCeros = 0;
	var contadorNegativo = 0;
	var contadorPositivos = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var flag = 1;
	var numeroMaximo;
	var numeroMinimo;


	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		if (numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativo = contadorNegativo + 1;
		}
		else
		{
			if(numeroIngresado == 0)
			{
				contadorCeros = contadorCeros + 1;
			}
			else
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos = contadorPositivos + 1;
			}
		}

		if(numeroIngresado % 2 == 0)
		{
			contadorPares = contadorPares + 1;
		}

		if(numeroIngresado > numeroMaximo || flag == 1)
		{
			numeroMaximo = numeroIngresado;
		}

		if(numeroIngresado < numeroMinimo || flag == 1)
		{
			numeroMinimo = numeroIngresado;
			flag = 0;
		}

		respuesta = prompt("Desea continuar ingrensando? Si o No");
		
		respuesta = respuesta.toLowerCase();

		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("ERROR! Desea continuar ingrensando? si o no");
			respuesta = respuesta.toLowerCase();
		}

	}

	promedioPositivos = sumaPositivos / contadorPositivos;

	promedioNegativos = sumaNegativos / contadorNegativo;

	diferencia = sumaPositivos + (-sumaNegativos);

	document.write("La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de negativos es de: " + contadorNegativo + "<br>");
	document.write("La cantidad de positivos es de: " + contadorPositivos + "<br>");
	document.write("La cantidad de ceros es de: " + contadorCeros + "<br>");
	document.write("La cantidad de numeros pares es de: " + contadorPares + "<br>");
	document.write("El promedio de numeros positivos es de: " + promedioPositivos + "<br>");
	document.write("El promedio de numeros negativos es de: " + promedioNegativos + "<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferencia + "<br>");
	document.write("El numero maximo es:  " + numeroMaximo + "<br>");
	document.write("El numero minimo es: " + numeroMinimo);

}//FIN DE LA FUNCIÓN