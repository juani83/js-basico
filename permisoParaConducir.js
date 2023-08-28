export function solution(car) {
    if(car.licensePlate) {
        car.drivingLicense = true;
    } else {
        car.drivingLicense = false;
    }
}

var prueba1 = solution({
    color: 'red',
    brand: 'Kia',
});

var prueba2 = solution({
color: 'gray',
brand: 'Chevrolet',
licensePlate: 'AAA111',
});

var prueba3 = solution({ licensePlate: 'RGB255'  });