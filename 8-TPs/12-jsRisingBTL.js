/*Roberto rocabado DIV E
TPs ej 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoIngresado;
	var sueldoBruto = 0;
	var nacionalidad = 0;
	var nacionalidadIngresada;

	edadIngresada = prompt("Ingrese su edad: ");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada > 17 && edadIngresada < 91)
	{

		sexoIngresado = prompt("Ingrese su sexo: femenino o masculino");
		sexoIngresado = sexoIngresado.toLowerCase();
		while(sexoIngresado != "femenino" && sexoIngresado != "masculino")
		{
			sexoIngresado = prompt("ERROR! Reingrese su sexo: ");
			sexoIngresado = sexoIngresado.toLowerCase();
		}

		estadoCivilIngresado = prompt("Ingrese su estado civil: 1-soltero/a  2-casado/a  3-divorciado/a  4-viudo/a");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
		switch(estadoCivilIngresado)
		{
			case 1:
				estadoCivilIngresado = "Soltero/a";
				break;

			case 2:
				estadoCivilIngresado = "Casado/a";
				break;

			case 3:
				estadoCivilIngresado = "Divorciado/a";
				break;

			case 4:
				estadoCivilIngresado = "Viudo/a";
				break;
		}

		sueldoIngresado = prompt("Ingrese su sueldo en bruto: ");
		sueldoIngresado = parseInt(sueldoIngresado);

		if(sueldoIngresado >= 8000)
		{
			sueldoBruto = sueldoBruto + sueldoIngresado;
		}
		else
		{
			sueldoBruto = "Sueldo menor a 8000";
		}

		numeroLegajo = prompt("Ingrese su numero de legajo:(sin 0 a la izquierda de 4 digitos)");
		numeroLegajo = parseInt(numeroLegajo);
		while(numeroLegajo < 999 && numeroLegajo > 9999 )
		{
			numeroLegajo = prompt("ERROR!Reingrese su legajo: (Recuerde como minimo 4 digitos sin ceros a la izquierda)");
			numeroLegajo = parseInt(numeroLegajo);
		}

		nacionalidadIngresada = prompt("Ingrese su nacionalidad: A-argentino / E-extranjero / N-nacionalizado");
		nacionalidadIngresada = nacionalidadIngresada.toLowerCase();
		switch(nacionalidadIngresada)
		{
			case "a":
				nacionalidad = "Argentino/a";
				break;

			case "e":
				nacionalidad = "Extranjero/a";
				break;

			case "n":
				nacionalidad = "Nacionalizado";
				break;
		}
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdEdad").value

}
