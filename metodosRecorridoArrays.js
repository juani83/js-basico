var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

var articulosfiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

articulosfiltrados;
/*
[
    {
      "nombre": "Libro",
      "costo": 320
    },
    {
      "nombre": "Teclado",
      "costo": 500
    }
  ]
*/

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

nombreArticulos;
/*
[
  "Bici",
  "Tv",
  "Libro",
  "Celular",
  "Laptop",
  "Teclado",
  "Audifonos"
]
*/

var findArticulos = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

findArticulos;
/*
{
    "nombre": "Laptop",
    "costo": 20000
}
*/

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
/*
Bici
Tv
Libro
Celular
Laptop
Teclado
Audifonos
*/

var someArticulos = articulos.some(function(articulo){
    return articulo.costo < 500;
});

someArticulos; // true - Hay al menos un articulo que cumple esa condicion