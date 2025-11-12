// encapsulamiento

const animal = require('.models/animal');
let animal1 = new animal("paco");
console.log(animal1.nombre);
animal1.verificarNombre("paco")
animal1.scrambleNombre();