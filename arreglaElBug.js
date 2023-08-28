// Funcion original
/*
export function solution(cars) {
    // 👇 Este es el código que no funciona
    return cars.find(function (car) {
      if (car.licensePlate) {
        return true;
      } else {
        return false;
      }
    });
  }
*/

export function solution(cars) {
    return cars.filter(function (car) {
        return car.licensePlate
    });
};