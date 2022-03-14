/*Roberto Rocabado DIV E
IF ej6 */ 
/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

/*function mostrar()
{
    var edad;
    
    edad = document.getElementById("txtIdEdad").value;
    edad = parseInt(edad);

    if (edad >= 18) {
        alert("Es mayor de edad");
    }else if (edad >= 13 && edad <=17){
            alert("Es un adolescente");
        } else {
                alert("Es un menor de edad");
            }
}//FIN DE LA FUNCIÓN

*/

/*Roberto rocabado DIV E
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/

function mostrar()
{
    var edad;
    var mensaje;
    
    edad = prompt("Ingrese su edad: ");
    edad = parseInt(edad);

    if (edad > 69){
        mensaje = "Es un anciano";
    } else {
        if (edad > 17 && edad < 71){
            mensaje = "Es mayor de edad";
        }
        else {
            if (edad > 12 && edad < 18) {
            mensaje= "Es un adolescente";
            }
             else {
                if (edad < 13 && edad > 3 ) {
                    mensaje = "Es un niño";
                }
                else {
                    if (edad < 4) {
                    mensaje = "Es un bebe";
                    }
                }
            }
        }
    }
    document.getElementById("txtIdEdad").value = mensaje;
}