const obj1 = {
    nome: "Pedro"
}
const obj2 = {
    nome: "João"
}

Object.defineProperty(obj2, "nome", {
    writable: false,
    configurable: false
})

Object.preventExtensions(obj2)

Object.freeze(obj1);
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj2));