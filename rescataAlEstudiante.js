export function solution(estudiantes, deathCount, nuevo) {
    for (var i = 1; i <= deathCount; i++) { 
    estudiantes.pop();
    };
    estudiantes.pop(nuevo);
    return estudiantes;
}

solution(["Juan", "Juanita", "Daniela"], 1, "Julian");
solution(["Nath", "Luisa", "Noru"], 2, "Cami");