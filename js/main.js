let bultos;

do {
    bultos = Number(prompt("Introduzca la cantidad de bultos (en numeros): "));
    if (bultos <= 0){
        alert("Los bultos deben ser mayores a 0");
    }
    else{
        alert("Usted ingresó " + bultos + " bultos.")    
    }
} while (bultos <= 0);

let valorDeclarado = Number(prompt("Introduzca el Valor Declarado (sin puntos ni comas): "));
let tarifa = 600;

function calculoFlete(bultos, tarifa, valorDeclarado){
    let cf = (bultos * tarifa) + (valorDeclarado * 0.06);
    return cf;
}

let precioFinal = calculoFlete(bultos, tarifa, valorDeclarado);

document.write("Usted ingreso " + bultos + " bultos." + "<br>")
document.write("Usted ingreso $" + valorDeclarado + " de Valor Declarado." + "<br>")
document.write("El costo final del flete es $" + precioFinal.toFixed(2)+".");

console.log("Usted ingreso " + bultos + " bultos")
console.log("Usted ingreso $" + valorDeclarado + " de Valor Declarado")
console.log("El costo final del flete es $" + precioFinal.toFixed(2))


