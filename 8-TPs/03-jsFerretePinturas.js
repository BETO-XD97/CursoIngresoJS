/*Roberto Rocabado DIV E 
TPs ej3 */
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var fahrenheit;
var centígrados;

function FahrenheitCentigrados () 
{
    fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit = parseInt(fahrenheit);

    centígrados = (fahrenheit - 32) * (5/9);

    alert(fahrenheit + " son " + centígrados + "°C");
}

function CentigradosFahrenheit () 
{
    centígrados = document.getElementById("txtIdTemperatura").value;
    centígrados = parseInt(centígrados);

    fahrenheit = (centígrados * (5/9)) +32;

    alert(centígrados + " °C son " + fahrenheit);
}
