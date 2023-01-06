let capInicio= Number(prompt("Introduzca capital inicial = "));
let interes = Number(prompt("Introduzca el interés anual = "));
let plazo = Number(prompt("Introduzca el nº de años de la inversión= "));
 
//asignamos a una variable el valor que nos devuelve la función y lo mostramos en pantalla, con dos decimales
let capFinal = interesCompuesto(capInicio, interes, plazo);
document.write("Capital final calculado: " + capFinal.toFixed(2));
 
/* definimos la función que va a hacer el cálculo.
Hemos puesto espacios intercalados en la fórmula para más claridad del código */
function interesCompuesto(ci, i, p) {
   let cf = ci * Math.pow( 1+i / 100, p );
   return cf;
}