// create
const pai = {
    nome: "pai",
    falar: function (msg) {
        console.log(`${this.nome} está falando`)
    }
}

const filho = Object.create(pai, { nome: { value: "junior" } })





// assign
const obj1 = {
    a: "a",
    b: "b",
    c: "c"
}
const obj2 = {
    b: "b2",
    d: "d2"
}
// Object.defineProperty(obj2, "naoEnumeravel", {
//     value: "nao enumerável"
// })
Object.defineProperties(obj2, {
    naoEnumeravel: {

        value: "nao enumerável"
    },
    enumeravel: {
        value: "enumerável",
        enumerable: true
    }
})


const filha = Object.assign({}, obj1, filho);
// const clone = Object.assign({}, obj1, obj2);
const obj5 = Object.assign({}, obj2);
console.log(obj5);

obj2.teste = "teste"

const obj3 = { ...obj1, ...obj2 };
const obj4 = { ...obj2, ...obj1 };
console.log(obj3);
console.log(obj4);



// keys
console.log(Object.keys(obj2));

// values
console.log(Object.values(obj2));

// entries
console.log(Object.entries(obj2));
