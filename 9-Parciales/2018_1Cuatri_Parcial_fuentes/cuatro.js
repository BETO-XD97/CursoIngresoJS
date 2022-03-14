/*Roberto rocabado DIV E
Parcial 2018 ej 4
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/

function mostrar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1 = prompt("Ingrese el primer numero: ");
    numero1 = parseInt(numero1);

    while(isNaN(numero1))
    {
        numero1 = prompt("ERROR! Reingrese el primer numero:")
        numero1 = parseInt(numero1);
    }

    numero2 = prompt("Ingrese el segundo numero: ");
    numero2 = parseInt(numero2)

    while(isNaN(numero2))
    {
        numero2 = prompt("ERROR! Reingrese el segundo numero:")
        numero2 = parseInt(numero2);
    }

    if(numero1 == numero2)
    {
        alert(numero1 + "" + numero2);
    }  else {
            if(numero1 > numero2){
                resultado = numero1 + numero2;
                alert("Resultado: " + resultado);
            } else {
                resultado = numero1 - numero2;
                alert("Resultado: " + resultado);
            }
    }
    if (resultado > 10)
    {
        alert(resultado + " es superior a 10.");
    }

}
