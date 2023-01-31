
/*SIMULADOR DE CALCULO DEL COSTO DE FLETES - TRANSPORTE NUEVA ROMA*/
//Toggle-button para modo oscuro
const botonColorMode = document.querySelector("#color-mode")
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode () {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode () {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado"){
    activarDarkMode();
} else{
    desactivarDarkMode ()
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode")
    if (darkMode === "activado") {
      desactivarDarkMode();
      botonColorMode.innerHTML = "Cambiar a Modo Oscuro";
    } else {
      activarDarkMode();
      botonColorMode.innerHTML = "Cambiar a Modo Claro";
    }
  })


//Seteamos valores por default para los inputs  de bultos y valor declarado.
  window.onload = function() {
    document.getElementById("packageInput").value = "1";
    document.getElementById("valueInput").value = "0";
  };


// Tomamos referencias para los elementos del fomrulario
let destino_1 = new Destino("Buenos Aires", 1, 600);
let destino_2 = new Destino("Rosario", 2, 400);
let destino_3 = new Destino("El Trebol", 3, 350);
let destino_4 = new Destino("Santa Fe", 4, 300);

const nuestrosDestinos = []
nuestrosDestinos.unshift(destino_1);
nuestrosDestinos.push(destino_2, destino_3, destino_4);
console.log(nuestrosDestinos)

const originInput = document.getElementById("originInput");
const destinationInput = document.getElementById("destinationInput");
const packagesInput = document.getElementById("packagesInput");
const valueInput = document.getElementById("valueInput");
const calculateButton = document.getElementById("calculateButton");
const resultDiv = document.getElementById("result");


//Funcion para restringir el ingreso de letras en inputs donde se necesitan valores numericos.
function onlyNumberKey(evt) {             
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}


// Funcion para calcular el costo del flete
function calculateCost(bultos, destino, valorDeclarado) {
    const destinationObject = nuestrosDestinos.find(dest => dest.nombre === destino);
    // Chequear si el destino es valido
    if (destinationObject) {
        // Uso de la propiedad "tarifa" del objeto
        const tarifa = destinationObject.tarifa;
        // Hacer el calculo
        const cost = bultos * tarifa + valorDeclarado * 0.006;
        // Devolver el resultado
        return cost;
    } else {
        // Si el destino es invalido, devuelve un mensaje 
        return "Destino invalido";
    }
}


// Agregamos un eventListener al boton de "calcular"
calculateButton.addEventListener("click", function() {
    // Invocamos los inputs del usuario
    const origen = originInput.value;
    const destinos = destinationInput.value;
    const bultos = Number(packageInput.value);
    const valorDeclarado = Number(valueInput.value);
    // Hacer el calculo
    const cost = calculateCost(bultos, destinos, valorDeclarado);
    // Mostrar resultado en pantalla
    resultDiv.innerHTML = "El costo del envio de " + bultos + " bulto(s) desde " + origen + " hasta " + destinos + " es de $" + cost.toFixed(2);
    console.log("Cantidad de bultos ingresados: " + bultos)
    console.log("El destino elegido fue: "+ destinos)
    console.log("El valor declarado de la mercaderia es: " + valorDeclarado)
});


//Agregamos otro eventListener para resetear los datos que ingresa el usuario
document.getElementById("resetButton").addEventListener("click", function(){
    document.getElementById("packageInput").value = "1";
    document.getElementById("valueInput").value = "0";
    document.getElementById("result").innerHTML = "Ingrese los nuevos datos";
  });

//Por ultimo, guardamos en el localStorage el array de objetos con nuestros destinos disponibles
//Convertimos el array a un string
localStorage.setItem("destinos", JSON.stringify(nuestrosDestinos))
//reconvertimos el string para que se nos devuelva el objeto como tal
const destinosLocalStorage = JSON.parse(localStorage.getItem("destinos"));
console.log(destinosLocalStorage);



































/*
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

function calculoFlete(bultos, tarifa, valorDeclarado){
    let cf = (bultos * tarifa) + (valorDeclarado * 0.006);
    return cf;
}*/

/* Arranca el programa */
//Se le solicita al usuario que ingrese un destino al cual enviar el/los bulto/s y se le informa por medio de un 'alert' la opcion elegida.
/*
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

function clearFields() {
    document.getElementById("exampleSelect1").selectedIndex = 0;
    document.getElementById("exampleSelect2").selectedIndex = 0;
    document.getElementById("exampleNumber1").value = "";
    document.getElementById("exampleNumber2").value = "";
    }
    


*/

