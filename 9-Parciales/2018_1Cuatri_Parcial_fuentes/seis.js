/*Roberto rocabado DIV E
Parcial 2018 ej6
Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".

Aclaración: hacer un switch y dentro toda la lógica.
*/

function mostrar()
{
    var horaIngresada;

    horaIngresada = document.getElementById("laHora").value;
    horaIngresada = parseInt(horaIngresada);

    
    switch(horaIngresada)
    {
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            tiempo = "Es de noche";
            break;

        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            tiempo = "Es de mañana";
            break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            tiempo = "Es de tarde";
            break;

        default: 
            tiempo = "La hora ingresada no es valida";
            break;
    }

    if(horaIngresada < 24 & horaIngresada > 19 && tiempo == "Es de noche")
    {
        document.getElementById("laHora").value = tiempo + ", a dormir.";
    } else {
         document.getElementById("laHora").value = tiempo;
    }
}
