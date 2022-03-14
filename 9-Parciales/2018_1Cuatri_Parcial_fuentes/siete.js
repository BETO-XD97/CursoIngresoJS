/*Roberto rocabado DIV E
Parcial 2018 ej 7
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{
    var notaIngresada;
    var sexoIngresado;
    var contador = 0;
    var promedio = 0;
    var cantidadVarones = 0;
    var notaMaxima;
    var notaMinima;
    var notaBaja = false;
    var sexo;

    while(contador < 5)
    {
        notaIngresada = prompt("Ingrese la nota:");
        notaIngresada = parseInt(notaIngresada);
        while(notaIngresada > 10 || isNaN(notaIngresada))
        {
            notaIngresada = prompt("ERROR! Reingrese la nota (recuerde que debe ser del 0 al 10)");
            notaIngresada = parseInt(notaIngresada);
        }

        sexoIngresado = prompt("Ingrese su sexo (f/femenino Y m/masculino)");
        sexoIngresado = sexoIngresado.toLowerCase();
        while(sexoIngresado != "f" && sexoIngresado != "m")
        {
            sexoIngresado = prompt("ERROR! Ingrese su sexo (f/femenino Y m/masculino)");
            sexoIngresado = sexoIngresado.toLowerCase();
        }

        switch(sexoIngresado)
        {
            case "m":
                switch(notaIngresada)
                {
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        cantidadVarones = cantidadVarones + 1;
                }
            
            break;
        }

        promedio = promedio + notaIngresada;
    
        if(notaMinima > notaIngresada || notaBaja == false)
        {
            notaMinima = notaIngresada;
            sexo = sexoIngresado;
            notaBaja = true; //bajo la bandera
        }
S
        contador = contador + 1;
    }

    promedio = promedio / contador;

    document.write("El promedio de las notas es de: " + promedio + "<br>");
    document.write("La nota mas baja es de: " + notaMinima + ", y su sexo es " + sexo + "<br>");
    document.write("La cantidad de varones con nota igual o mayor de 6, es de: " + cantidadVarones);

}
