class Animal {
    constructor(tipo) {
        if (this.constructor === Animal) {
            throw new Error("Animal is an abstract class ")
        }
        if (tipo) {
            this.tipo = tipo
        }
    }
    comer() {
        throw new Error("Method 'comer()' must be implemented")
    }
}

class Gato extends Animal {
    constructor(nome) {
        super("mamífero")
        this.nome = nome
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

const animal = new Animal("mamífero");
const mingau = new Gato("Mingau")

console.log(mingau.comer())