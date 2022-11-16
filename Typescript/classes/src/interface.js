"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
exports.Animal = Animal;
const miica = {
    categoria: "mamífero",
    mostrarDetalhes() {
        console.log("fofa");
    }
};
console.log(miica);
class Gato extends Animal {
    constructor(nome, idade) {
        super("mamífero");
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("Mostrar detalhe chamado");
    }
}
class Cachorro {
    constructor(categoria, nome, idade) {
        this.categoria = categoria;
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("Mostrar detalhes de Cachorro");
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1 : "");
    }
    latir() {
        console.log(this.nome, "está latindo");
    }
}
const mingau = new Gato("Mingau", 5);
console.log(mingau);
const toto = new Cachorro("mamífero", "toto");
toto.latir();
