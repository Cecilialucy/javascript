//reverse():

let arr = [1, 2, 3]
console.log(arr.reverse()) // 3, 2, 1


// reduce():
let j = 0;
let soma = arr.reduce(function (acumulador, atual, i, _arr) {
    console.log(": ", i)
    console.log(": ", j++)
    console.log("acumulador: ", acumulador, " --- atual: ", atual)
    return acumulador + atual
}, 0)
console.log(soma); // 6
console.log(arr); // 3, 2, 1

const nomes = ['Daniel', 'Maria', 'Joana', 'João']
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {
    let primeiraLetra = nomeAtual[0]
    if (nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})
console.log(nomesPorOrdem);