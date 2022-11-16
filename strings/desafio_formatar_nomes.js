function formatarNome(nomeCompleto) {
    nomeCompleto = nomeCompleto.trim()
    let primeiroEspaco = nomeCompleto.indexOf(" ");
    if (primeiroEspaco < 0) {
        return nomeCompleto
    }

    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco);
    let sobreNome = nomeCompleto.slice(primeiroEspaco + 1);
    return sobreNome + ", " + primeiroNome
}

console.log(formatarNome("Maria")); // retornar: Maria
console.log(formatarNome("Maria Silva")); // Silva, Maria
console.log(formatarNome("Maria Santos Silva")); // Santos Silva, Maria