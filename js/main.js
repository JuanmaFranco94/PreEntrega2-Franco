
/*SIMULADOR DE CALCULO DEL COSTO DE FLETES - TRANSPORTE NUEVA ROMA*/
//Toggle-button para modo oscuro

const toggleBtn = document.querySelector("#toggleBtn");
  toggleBtn.addEventListener("click", function() {
    toggleBtn.classList.toggle("dark");
});

const botonColorMode = document.querySelector("#toggleBtn")
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

darkMode === "activado" ? activarDarkMode() : desactivarDarkMode();

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode")
    if (darkMode === "activado") {
      desactivarDarkMode();
      botonColorMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/> <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/></svg>';
    } else {
      activarDarkMode();
      botonColorMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16"> <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>';
    }
  })

//Configuracion del modal "calculadora"
const botonModalCentro = document.querySelector("#boton-modal-centro");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

botonModalCentro.addEventListener("click", () => {
  modalCentro.classList.add("active");
  toggleBtn.style.display="none";
}) 

cerrarModalCentro.addEventListener("click", () => {
  modalCentro.classList.remove("active");
  toggleBtn.style.display="block";
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






























