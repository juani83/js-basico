var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// Alternativa 1
/*
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}
*/

// Alternativa 2
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}