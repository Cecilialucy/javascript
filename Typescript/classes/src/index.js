"use strict";
// Mais longa
// class Animal {
//     categoria: string
//     constructor(categoria: string){
//         this.categoria = categoria
//     }
// }
// Mais curta
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
class Gato extends Animal {
    constructor(nome) {
        super("mamífero");
        this.nome = nome;
    }
    mostrarDetalhes() {
        console.log(this.nome, this.categoria);
    }
}
class Cachorro extends Animal {
    constructor(_nome) {
        super("mamífero");
        this._nome = _nome;
    }
    get nome() {
        console.log("get chamado");
        return this._nome;
    }
    set nome(n) {
        console.log("set chamado");
        this._nome = n;
    }
    mostrarDetalhes() {
        console.log(this._nome + " é um " + this.categoria);
    }
}
// const animal = new Animal("mamífero")
// console.log(animal)
// animal.mostrarCategoria()
// animal.categoria = "categoria editada fora da classe"
// console.log(animal)
const mingau = new Gato("Mingau");
mingau.mostrarDetalhes();
//mingau.nome = "nome alterado"
const toto = new Cachorro("Totó");
toto.nome = "Novo nome de Totó";
console.log("toto.nome: ", toto.nome);
toto.mostrarDetalhes();
toto.mostrarCategoria();
class Cliente {
    constructor() {
        this._listaAnimais = []; //Endereço de memória AA
        this._tempListaAnimais = [];
    }
    adicionarAnimais(...animais) {
        this._listaAnimais.push(...animais);
        this._tempListaAnimais.length = 0;
        this._tempListaAnimais = [...this._listaAnimais];
    }
    get listaAnimais() {
        return [...this._listaAnimais];
    }
}
const fabian = new Cliente();
fabian.adicionarAnimais(toto, mingau);
fabian.listaAnimais.length = 0;
console.log(fabian);
