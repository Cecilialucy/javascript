const teste = function (cb) {
    console.log('Função teste')
    console.log(cb)
    cb('Passado por parâmetro para cb')
}
const fn = function (param) {
    console.log('Função anônima de callback')
    console.log(param)
}

//fn(30)
teste(fn)