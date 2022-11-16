// ES5
function Animal(tipo) {
    if (this instanceof Animal) {
        if (tipo) this.tipo = tipo
    } else {
        throw new Error("Animal must be created with new operator")
    }
}

let Cachorro = new Animal("mamífero");
let gato = new Animal("mamífero")
let cobra = new Animal("réptil")
let peixe = new Animal()

let arr = new Array(1, 2, 3);

Animal.prototype.obterTipo = function () {
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

console.log(peixe.tipo);

// ES6
class AnimalC {
    constructor(tipo) {
        if (tipo) {
            this.tipo = tipo
        }

    }

    obterTipo() {
        return this.tipo
    }

    testeProto = "será que funciona?"
}

AnimalC.prototype.tipo = "desconhecido";

let animal = new AnimalC("anfíbio");
let sapo = new AnimalC();

console.log(animal);
console.log(gato);
console.log(typeof animal);
console.log(typeof gato);
console.log(typeof Animal);
console.log(typeof AnimalC);
console.log(animal.obterTipo());
console.log(gato.obterTipo());
console.log(typeof Animal.prototype);
console.log(typeof AnimalC.prototype);
console.log(sapo.tipo);
console.log(AnimalC("hdgdg"));