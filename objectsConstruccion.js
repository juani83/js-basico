function auto(marca, modelo, annio) {
    this.brand = marca;
    this.model = modelo;
    this.year = annio;
}

var autoNuevo = new auto("Toyota", "Corolla", 2020);

autoNuevo.brand;    // Toyota
autoNuevo.model;    // Corolla
autoNuevo.year;     // 2020

var autoNuevo1 = new auto("Peugeot", "406", 2023);

autoNuevo1.brand;    // Peugeot
autoNuevo1.model;    // 406
autoNuevo1.year;     // 2023