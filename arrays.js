var frutas =    ["manzana", 
                "banana", 
                "pera", 
                "naranja", 
                "mandarina"];

frutas[0]; // "manzana"
frutas[1]; // "banana"
frutas[2]; // "pera"
frutas[3]; // "naranja"
frutas[4]; // "mandarina"

frutas.length; // 5

frutas.push("cereza"); // Agrega un elemento al final

frutas.length; // 6

frutas[5]; // "cereza"

frutas.pop(); // Elimina el ultimo elemento

frutas.length; // 5

frutas; // Array(5) [ "manzana", "banana", "pera", "naranja", "mandarina" ]

frutas.unshift("uva"); // Agrega un elemento al principio

frutas; // Array(6) [ "uva", "manzana", "banana", "pera", "naranja", "mandarina" ]

frutas.shift(); // Elimina el primer elemento

frutas; // Array(5) [ "manzana", "banana", "pera", "naranja", "mandarina" ]

frutas.indexOf("banana"); // 1 - Devuelve el indice del elemento