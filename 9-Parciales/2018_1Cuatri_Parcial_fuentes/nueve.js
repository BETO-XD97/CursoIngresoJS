/*Roberto rocabado DIV E 
Parcial 2018 ej 9
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/

function mostrar()
{
    var marca;
    var peso;
    var temperatura; //entre -30 y 30
    var respuesta;
    var contadorPares;


    do
    {
        marca = prompt("Ingrese la marca del producto");
        marca = marca.toUpperCase();

        peso = prompt("Ingrese el peso del producto: (solo valido de 1 a 100)");
        peso = parseInt(peso);
        while(isNaN(peso) || peso > 100 || peso < 1)
        {
            peso = prompt("Error! Ingrese el peso del producto: (solo valido de 1 a 100)");
            peso = parseInt(peso);
        }

        temperatura = prompt("Ingrese la temperatura, el cual debe ser de -30 a 30");
        temperatura = parseInt(temperatura);
        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Error! Ingrese la temperatura, el cual debe ser de -30 a 30");
            temperatura = parseInt(temperatura);
        }

        respuesta = prompt("Desea seguir ingresando: S / N")
        respuesta = respuesta.toUpperCase();
        while(respuesta != "S" && respuesta != "N")
        {
            respuesta = prompt("Error! Desea seguir ingresando: S / N")
            respuesta = respuesta.toUpperCase();
        }

        if(temperatura % 2 ==0){
            contadorPares = contadorPares + 1;
        }
    
    }while(respuesta == "S")
}
