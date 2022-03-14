/*Roberto rocabado DIV E
TPs ej 4 */
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

//EJERCICIO CON SOLO IF

/*
function CalcularPrecio () 
{
        var lamparas;
        var importeFinal;
        var marca;
        var descuento;
        var precioLamparas;
        var descuentoFinal;
        

        lamparas = document.getElementById("txtIdCantidad").value;
        lamparas = parseInt(lamparas);
        precioLamparas = lamparas * 35;
        marca = document.getElementById("Marca").value;

if (lamparas >= 6) {
            descuento = 50/100;
        } else if (lamparas == 5 && marca == "ArgentinaLuz") {
                descuento = 40/100;
                } else if (lamparas == 5 && marca != "ArgentinaLuz"){
                        descuento = 30/100;      
        } else if (lamparas == 4 && marca == "ArgentinaLuz"){
                descuento = 25/100;
                } else if( lamparas == 4 && marca != "ArgentinaLuz"){
                        descuento = 20/100;
        } else if ( lamparas == 3 && marca == "ArgentinaLuz"){
                descuento = 15/100;
                }else if (lamparas == 3 && marca == "FelipeLamparas"){
                        descuento = 10/100;
                        }else if (lamparas == 3 && marca !== "ArgentinaLuz" && marca != "FelipeLamparas"){
                                descuento = 5/100;
        } else if ( lamparas == 2 ){
                descuento = 0;
        } else if ( lamparas == 1 ) {
                descuento = 0;
        }    
        
        descuentoFinal = precioLamparas * descuento;
        importeFinal = precioLamparas - descuentoFinal;
        document.getElementById("txtIdprecioDescuento").value = importeFinal;
        
        if (importeFinal > 120) {
                importeFinal = importeFinal * 1.10;
                importeFinal = parseInt(importeFinal);
                alert("Usted pagó " + importeFinal + " de IIBB");
        }
         
}
*/

//EJERCICIO CON IF Y SWITCH

/*
function CalcularPrecio ()
{
        var lamparas;
        var importeFinal;
        var marca;
        var descuento;
        var precioLamparas;
        var descuentoFinal;

        lamparas = document.getElementById("txtIdCantidad").value;
        lamparas = parseInt(lamparas);
        precioLamparas = lamparas * 35;
        marca = document.getElementById("Marca").value;

        if (lamparas >= 6){
                descuento = 50/100;
        } else {
                if (lamparas == 5){
                        switch (marca)
                        {
                                case "ArgentinaLuz":
                                        descuento = 40/100;
                                        break;
                                
                                default:
                                        descuento = 30/100;
                                        break;
                        }
                } else {
                        if (lamparas == 4){
                                switch (marca)
                                {
                                        case "ArgentinaLuz":
                                        case "FelipeLamparas":
                                                descuento = 25/100;
                                                break;
                                        
                                        default:
                                                descuento = 20/100;
                                                break;
                                }
                        } else {
                                if (lamparas == 3){
                                        switch(marca)
                                        {
                                                case "ArgentinaLuz":
                                                        descuento = 15/100;
                                                        break;

                                                case "FelipeLamparas":
                                                        descuento = 10/100;
                                                        break;

                                                default:
                                                        descuento = 5/100;
                                                        break;
                                        }
                                } else {
                                        if (lamparas == 2){
                                                descuento = 0;
                                        } else {
                                                if (lamparas == 1){
                                                        descuento = 0;
                                                }
                                        }
                                }
                        }
                }
        }

        descuentoFinal = precioLamparas * descuento;
        importeFinal = precioLamparas - descuentoFinal;
        document.getElementById("txtIdprecioDescuento").value = importeFinal;
        
        if (importeFinal > 120) {
                importeFinal = importeFinal * 1.10;
                importeFinal = parseInt(importeFinal);
                alert("Usted pagó " + importeFinal + " de IIBB");
        }

}
*/

//EJERCICIO CON SOLO SWITCH

function CalcularPrecio ()
{
        var lamparas;
        var importeFinal;
        var marca;
        var descuento;
        var precioLamparas;
        var descuentoFinal;

        lamparas = document.getElementById("txtIdCantidad").value;
        lamparas = parseInt(lamparas);
        precioLamparas = lamparas * 35;
        marca = document.getElementById("Marca").value;

        switch (lamparas)
        {
                case 1:
                case 2:
                        descuento = 0;
                        break;

                case 3:
                        switch(marca)
                        {
                                case "ArgentinaLuz":
                                        descuento = 15/100;
                                        break;

                                case "FelipeLamparas":
                                        descuento = 10/100;
                                        break;

                                default:
                                        descuento = 5/100;
                                        break;
                        }
                break;

                case 4:
                        switch(marca)
                        {
                                case "ArgentinaLuz":
                                case "FelipeLamparas":
                                        descuento = 25/100;
                                        break;

                                default:
                                        descuento = 20/100;
                                        break;
                        }
                break;

                case 5:
                        switch(marca)
                        {
                                case "ArgentinaLuz":
                                        descuento = 40/100;
                                        break;

                                default:
                                        descuento = 30/100;
                                        break;
                        }
                break;

                default:
                        descuento = 50/100;
                        break;
        }

        descuentoFinal = precioLamparas * descuento;
        importeFinal = precioLamparas - descuentoFinal;
        document.getElementById("txtIdprecioDescuento").value = importeFinal;
        
        if (importeFinal > 120) {
                importeFinal = importeFinal * 1.10;
                importeFinal = parseInt(importeFinal);
                alert("Usted pagó " + importeFinal + " de IIBB");
        }

}