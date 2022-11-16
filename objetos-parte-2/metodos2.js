const obj1 = {
    prop1: "prop 1",
    prop2: "prop2"
}
const objFreeze = { ...obj };
const objSeal = { ...obj };
const objPrevent = { ...obj };

Object.freeze(objFreeze) // não pode criar, nem atualizar e nem remover propriedades
Object.seal(objSeal) // não pode criar, pode atualizar, mas não pode rmover props
Object.preventExtensions(objPrevent) // não pode criar, pode alterar e pode remover props