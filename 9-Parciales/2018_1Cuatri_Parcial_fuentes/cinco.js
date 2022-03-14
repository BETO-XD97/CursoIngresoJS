/*Roberto rocabado DIV E
Parcial 2018 ej 5
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/

function mostrar()
{
    var planetas;

    planetas = prompt("Ingrese el planeta: ");
    planetas = planetas.toLowerCase();

    switch(planetas)
    {
        case "mercurio":
        case "venus":
        case "marte":
            alert("Acá hace más calor!!!");
            break;

        case "tierra":
            alert("Acá vivimos!!!");
            break;

        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Acá hace mas frio!!!");
            break;

        default:
            alert("Lo ingresado no es valido!!!");
            break;
    }

}
