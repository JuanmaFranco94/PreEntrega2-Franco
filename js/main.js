
/*SIMULADOR DE CALCULO DEL COSTO DE FLETES - TRANSPORTE NUEVA ROMA*/
//Toggle-button para modo oscuro
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
});

//Configuracion del modal "calculadora"
const botonModalCentro = document.querySelector("#boton-modal-centro");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

botonModalCentro.addEventListener("click", () => {
  modalCentro.classList.add("active");
  modalCentro.scrollTop = 0;
}) 

cerrarModalCentro.addEventListener("click", () => {
  modalCentro.classList.remove("active");
  Swal.fire({
    title: 'Atencion!',
    text: 'Estas seguro de querer salir?',
    icon: 'question',
    iconColor: '#000',
    confirmButtonText: 'Aceptar'
  })
})

//Seteamos valores por default para los inputs  de bultos y valor declarado.
  window.onload = function() {
    document.getElementById("packageInput").value = "1";
    document.getElementById("valueInput").value = "0";
  };


// Tomamos referencias para los elementos del fomrulario
let destino_1 = new Destino("Buenos Aires", "Si", 600);
let destino_2 = new Destino("Rosario", "Si", 400);
let destino_3 = new Destino("El Trebol", "Si", 350);
let destino_4 = new Destino("Santa Fe", "Si", 300);

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
  return destinationObject ? bultos * destinationObject.tarifa + valorDeclarado * 0.006 : "Destino invalido";
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


// Guardamos los ultimos datos en localStorage
localStorage.setItem("lastCalculation", JSON.stringify({
    destination: destinationInput.value,
    packages: packageInput.value,
    value: valueInput.value,
    }));
    
// Recuperamos los datos de localStorage
let lastCalculation = JSON.parse(localStorage.getItem("lastCalculation"));
if (lastCalculation) {
destinationInput.value = lastCalculation.destination;
packageInput.value = lastCalculation.packages;
valueInput.value = lastCalculation.value;
}

// Mostramos los datos en la página
let calculationHistory = document.createElement("div");
calculationHistory.innerHTML = `
<br>
    <h3><strong>Último cálculo realizado</strong></h3>
    <p><strong>Destino: </strong>${lastCalculation.destination}</p>
    <p><strong>Bultos: </strong>${lastCalculation.packages}</p>
    <p><strong>Valor Declarado: </strong>${lastCalculation.value}</p>
`;
document.getElementById("result").appendChild(calculationHistory);






























