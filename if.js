var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, sera tu primera votacion");
} else if (edad > 18) {
    console.log("Puedes votar nuevamente");
} else {
    console.log("Aun no puedes votar");
};


// operador ternario
// condition ? true : false;
true ? console.log("Verdadero") : console.log("Falso")


var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno"

console.log(resultado);