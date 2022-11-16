// toFixed

let numero = 1234567.890;
console.log(numero.toFixed(2));
console.log(typeof numero.toFixed(2));

//toPrecision
console.log(numero.toPrecision(15));

// toExponential
numero = 12.324567;
console.log(numero.toExponential());
console.log(numero.toExponential(4));

// toString
numero = 15;
console.log(numero.toString(2));
console.log((15).toString(16)); // f
console.log(typeof numero.toString(2));

// toLocaleString
numero = 123456.789;
console.log(numero.toLocaleString());
console.log(numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
console.log(numero.toLocaleString("en-US", { style: "currency", currency: "USD" })); // $123,456.79
console.log(numero.toLocaleString("pt-PT", { style: "currency", currency: "EUR" })); // 123 456,79 €

// MAX_VALUE e MIN_VALUE
console.log(Number.MAX_VALUE, Number.MIN_VALUE);

// isNaN
let numeroAsString = "3.456";
console.log(isNaN(numeroAsString)); // false
