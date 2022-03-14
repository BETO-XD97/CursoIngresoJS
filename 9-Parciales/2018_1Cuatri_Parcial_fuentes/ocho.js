/*Roberto rocabado DIV E
Parcial ej 8
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/

function mostrar()
{
    var numeroIngresado;
    var letraIngresada;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCero = 0;
    var sumaPositivoTotal = 0;
    var sumaNegativosTotal = 0
    var contadorPositivos = 0;
    var contadorNegativos = 0;
    var flag = false;
    var letraminimo;
    var letramaximo;
    var promedioPositivos;
    //var respuesta = "S";
    var numeroMaximo;
    var numeroMinimo;

    do
    {
        numeroIngresado = prompt("Ingrese un numero entre -100 y 100:");
        numeroIngresado = parseInt(numeroIngresado);
        while(isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100)
        {
            numeroIngresado = prompt("Error! Ingrese un numero entre -100 y 100:");
            numeroIngresado = parseInt(numeroIngresado);   
        }

        letraIngresada = prompt("Ingrese cualquier letra:");
        letraIngresada = letraIngresada.toUpperCase(); 
        
        respuesta = prompt("Desea seguir ingresando: S / N")
        respuesta = respuesta.toUpperCase();
        while(respuesta != "S" && respuesta != "N")
        {
            respuesta = prompt("Error! Desea seguir ingresando: S / N")
            respuesta = respuesta.toUpperCase();
        }


        if(numeroIngresado == 0){
            contadorCero = contadorCero + 1;
        }

        if(numeroIngresado % 2 == 0)
        {
            contadorPares = contadorPares + 1;
        }else{
            contadorImpares = contadorImpares + 1;
        }

        if(numeroIngresado > 0){
            sumaPositivoTotal = sumaPositivoTotal + numeroIngresado;
            contadorPositivos = contadorPositivos + 1;
        } else {
            sumaNegativosTotal = sumaNegativosTotal + numeroIngresado;
            contadorNegativos = contadorNegativos + 1;
        }

        if(numeroMaximo < numeroIngresado || flag == false)
        {
            numeroMaximo = numeroIngresado;
            letramaximo= letraIngresada;
        }
        if(numeroMinimo > numeroIngresado || flag == false)
        {
            numeroMinimo = numeroIngresado;
            flag = true;
            letraminimo= letraIngresada;
        }

    }while(respuesta == "S") 

    promedioPositivos = sumaPositivoTotal / contadorPositivos;

    document.write("La cantidad de numeros pares es de: " + contadorPares + "<br>");
    
    document.write("La cantidad de numeros impares es de: " + contadorImpares + "<br>");

    document.write("La suma de todos los ceros  es de: " + contadorCero + "<br>");

    document.write("El promedio de todos los numeros positivos es de: " + promedioPositivos + "<br>");

    document.write("La suma de todos los numeros negativos es de: " + sumaNegativosTotal + "<br>");

    document.write("EL numero minimo es : " + numeroMinimo + " y su letra es " + letraminimo + "<br>");

    document.write("El numero maximo es: " + numeroMaximo + " y su letra es " + letramaximo + "<br>");
}

