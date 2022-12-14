//ES5
function Animal() { }

Animal.prototype.whoAmI = function () {
    return this
}

Animal.categoria = "ser vivo"
const dog = new Animal()



//ES6
class Cachorro {
    constructor(nome) {
        this.nome = nome
        console.log("chamando método estático de dentro do constructor")
        Cachorro.beber()
    }
    static comer() {
        console.log(this) // cachorro
        console.log("comendo")
        this.beber()
    }
    static beber() {
        console.log("bebendo")
    }
}

const dog2 = new Cachorro("Rex");

console.log(dog);
console.log(dog.whoAmI());
console.log(Animal.categoria);
console.log(dog.categoria);