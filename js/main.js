/*SIMULADOR DE CALCULO DEL COSTO DE FLETES - TRANSPORTE NUEVA ROMA*/


let bultos;
let precioFinal;

let destino_1 = new Destino("Buenos Aires", 1, 600);
let destino_2 = new Destino("Rosario", 2, 400);
let destino_3 = new Destino("El Trebol", 3, 350);
let destino_4 = new Destino("Santa Fe", 4, 300);

const nuestrosDestinos = []
nuestrosDestinos.unshift(destino_1);
nuestrosDestinos.push(destino_2, destino_3, destino_4);
console.log(nuestrosDestinos)

//display 
const preciosDestinos = nuestrosDestinos.map(item => {
    const precios = {};

    precios[item.nombre] = item.tarifa;
    return precios;
})
console.log(JSON.stringify(preciosDestinos))

for (let nombre in nuestrosDestinos) {
	console.log(nombre + ":", nuestrosDestinos[nombre]);
}

/*const precioDestinos = nuestrosDestinos.map(({nombre,tarifa})=>{      
    console.log(`Cada bulto enviado a ${nombre} tiene un costo de $ ${tarifa} cada uno.`)
});
    console.log(precioDestinos)
*/


function calculoFlete(bultos, tarifa, valorDeclarado){
    let cf = (bultos * tarifa) + (valorDeclarado * 0.006);
    return cf;
}

/* Arranca el programa */
//Se le solicita al usuario que ingrese un destino al cual enviar el/los bulto/s y se le informa por medio de un 'alert' la opcion elegida.
let destino = Number(prompt('Elegí uno de nuestros destinos: \n1- Buenos Aires. \n2- Rosario. \n3- El Trebol. \n4- Santa Fe.'));
if (destino == 1){
    alert("Usted eligió el destino 'Buenos Aires'")
}
if (destino == 2) {
    alert("Usted eligió el destino 'Rosario'")
}
if (destino == 3){
    alert("Usted eligió el destino 'El Trebol'")
}
if (destino == 4){ 
    alert("Usted eligió el destino 'Santa Fe'")
}

//Se le solicita al usuario que ingrese la cantidad de bultos a enviar. Esta no puede ser menor o igual a 0. se le informa por medio de un 'alert' la opcion elegida.
do {
    bultos = Number(prompt("Introduzca la cantidad de bultos (en numeros): "));
    if (bultos <= 0){
        alert("Los bultos deben ser mayores a 0");
    }
    else{
        alert("Usted ingresó " + bultos + " bultos.")    
    }
} while (bultos <= 0);

//Se le solicita al usuario que ingrese el valor de la mercaderia a enviar. El 0,06% del valor se agrega al costo a modo de seguro de mercaderia.
let valorDeclarado = Number(prompt("Introduzca el Valor Declarado (sin puntos ni comas): "));

if (destino == 1) {  
    precioFinal = calculoFlete(bultos, destino_1.tarifa, valorDeclarado);
}
if (destino == 2){
    precioFinal = calculoFlete(bultos, destino_2.tarifa, valorDeclarado);
}
if (destino == 3){
    precioFinal = calculoFlete(bultos, destino_3.tarifa, valorDeclarado);
}
if (destino == 4){ 
    precioFinal = calculoFlete(bultos, destino_4.tarifa, valorDeclarado);
}

//Se imprime el detalle de la cotizacion.
console.log("Usted ingreso " + bultos + " bultos")
console.log("Usted ingreso $" + valorDeclarado + " de Valor Declarado")
console.log("El costo final del flete es $" + precioFinal.toFixed(2))

