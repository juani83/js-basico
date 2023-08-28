
// Un Objeto se define con {} y tiene propiedades (palabra clave: valor)
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.marca} ${this.modelo} ${this.annio}`);
    }
};

miAuto.marca;   // "Toyota"
miAuto.modelo;  // "Corolla" 
miAuto.annio;   // 2020

miAuto.detalleDelAuto(); // Auto Toyota Corolla 2020