function add(x: unknown, y: unknown) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y
    }
    return "precisa passar números"
}

const teste = add(3, 5)