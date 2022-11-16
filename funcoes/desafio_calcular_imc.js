/*
Muito abaixo do peso - 16 a 16,9 kg
Abaixo do peso - 17 a 17,4 kg
Peso normal - 18,5 a 24,9 kg
Acima do peso - 25 a 29,9 kg
Obesidade grau I - 30 a 34,9kg
Obesidade grau II - 35 a 40 kg
Obesidade grau III - maior que 40 kg
*/


function calcularIMC(peso, altura) {
    if (peso === undefined || altura === undefined) {
        throw Error('É necessário digitar peso e altura.')
    }
    return peso / (altura * altura)
}

function classificarIMC(imc) {
    if (imc <= 16.9) {
        return 'Muito abaixo do peso';
    } else if (imc <= 18.4) {
        return 'Abaixo do peso';
    } else if (imc <= 24.9) {
        return 'Normal';
    } else if (imc <= 29.9) {
        return 'Acima do peso'
    } else if (imc <= 34.9) {
        return 'Obesidade 1'
    } else if (imc <= 40) {
        return 'Obesidade 2'
    } else {
        return 'Obesidade 3';
    }
}
let imc = calcularIMC(54, 1.69);
console.log(imc);
console.log(classificarIMC(imc));
