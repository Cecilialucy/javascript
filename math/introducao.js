// min
console.log(Math.min(1, 2, 3, 4, 5));

// max
console.log(Math.max(1, 2, 10, 4, 5));
let arr = [1, 2, 3, 10, 5, 6];
console.log(Math.max(...arr));  // retorna 10

// round
console.log(Math.round(45.5)); //46
console.log(Math.round(45.49)); // 45
console.log(Math.floor(49.9999999)); // 49
console.log(Math.ceil(49.9999999)); // 50
console.log(Math.ceil(49.00000001)); // 50

// pow
console.log(Math.pow(2, 3)); // potenciação
console.log(2 ** 3); // potenciação

// sqrt
console.log(Math.sqrt(49)); // raiz quadrada
console.log(Math.cbrt(8)); // raiz cúbica

// random
console.log(Math.random()); // retorna um número entre 0 e 1, mas não incluindo o 1
