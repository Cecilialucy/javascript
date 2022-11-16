// ES5
function Animal(tipo) {
    if (this instanceof Animal) {
        if (tipo) this.tipo = tipo
    } else {
        throw new Error("Animal must be created with new operator")
    }
}

function Cachorro(nome) {
    this.nome = nome
    Animal.call(this, "mamífero")
    //this.constructor = Cachorro
}
Cachorro.prototype = new Animal()
Cachorro.prototype.constructor = Cachorro

let dog = new Cachorro("Dog");

Animal.prototype.obterTipo = function () {
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

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
}

class GatoC extends AnimalC {
    constructor(nome) {
        super("mamífero")
        this.nome = nome
    }
}

AnimalC.prototype.tipo = "desconhecido";

let animal = new AnimalC("anfíbio");
let sapo = new AnimalC()
let mingau = new GatoC("Mingau");





console.log(Animal.prototype);
console.log(AnimalC.prototype);
console.log(mingau);