function Animal(tipo) {
    if (tipo) this.tipo = tipo
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

