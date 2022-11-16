class Contador {
    //contador = 0
    constructor() {
        this._symb = Symbol()
        this.contador = 0
        this[this._symb] = 0
    }
    increment() {

        this.contador++
        this[this._symb] = this[this._symb] + 1
        console.log(this.contador)
        console.log(this[this._symb])
    }
}

let c1 = new Contador();
c1.contador = 100;
c1[c1._symb] = 200;
c1.increment()
c1.increment()
c1.increment()
console.log(c1.contador);
console.log(c1);