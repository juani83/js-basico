var seleccionMia = "Papel";
var seleccionRival = "Tijera";

if (seleccionMia === "Papel" && seleccionRival === "Papel") {
    console.log("Empate :| ambos seleccionaron Papel.");
} else if (seleccionMia === "Papel" && seleccionRival === "Tijera") {
    console.log("Perdiste :( la Tijera corta el Papel.");
} else if (seleccionMia === "Papel" && seleccionRival === "Piedra") {
    console.log("Ganaste :D el Papel envuelve la Piedra.");

} else if (seleccionMia === "Piedra" && seleccionRival === "Piedra") {
    console.log("Empate :| ambos seleccionaron Piedra.");
} else if (seleccionMia === "Piedra" && seleccionRival === "Papel") {
    console.log("Perdiste :( el Papel envuelve la Piedra.");
} else if (seleccionMia === "Piedra" && seleccionRival === "Tijera") {
    console.log("Ganaste :D la Piedra rompe la Tijera.");

} else if (seleccionMia === "Tijera" && seleccionRival === "Tijera") {
    console.log("Empate :| ambos seleccionaron Tijera.");
} else if (seleccionMia === "Tijera" && seleccionRival === "Piedra") {
    console.log("Perdiste :( la Piedra rompe la Tijera.");
} else if (seleccionMia === "Tijera" && seleccionRival === "Papel") {
    console.log("Ganaste :D la Tijera corta el Papel.");

} else {
    console.log("Debes seleccionar 'Piedra', 'Papel' o 'Tijera'.");
}