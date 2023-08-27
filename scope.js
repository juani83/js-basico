var miNombre = "Diego";             // Scope Global

function nombre(){
    var miApellido = "De Granda";   // Scope Local
    console.log(miNombre + " " + miApellido);
}

nombre();                           // Diego De Granda
console.log(miNombre);              // Diego
console.log(miApellido);            // miApellido is not defined