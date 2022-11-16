function formatarNome(nomeCompleto) {
    let nomesArray = nomeCompleto.split(" ");
    if (nomesArray.length === 1) {
        return nomeCompleto
    }

    let primeiroNome = nomesArray.shift()
    return nomesArray.join(" ") + ", " + primeiroNome

}

console.log(formatarNome("Maria")); //  ["Maria"]
console.log(formatarNome("Maria Silva")); //  ["Maria", "Silva"]
console.log(formatarNome("Maria Santos Silva")); // [,["Maria", "Santos", "Silva"]