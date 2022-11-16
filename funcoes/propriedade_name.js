const somar = function s() {
    console.log(arguments)
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(somar.name);

// Se fosse uma função anônima apareceria o nome da constante "somar"