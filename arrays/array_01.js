const arr = [1, 5, 10, 'olá', true]
// every():

// let sohNumeros = arr.every(function (el) {
//         return typeof el === 'number'
//     })
//     console.log(sohNumeros)





//some():

// let sohNumeros = arr.some(function (el) {
//     return typeof el === 'number'
// })
// console.log(sohNumeros)





//filter():

let arr1 = arr.filter(function (el, i, _arr) {
    return typeof el === 'number'
})
console.log(arr)
console.log(arr1)




//forEach():

arr.forEach(function (el, i, _arr) {
    console.log(el)
})


//map():

let arr2 = arr1.map(function (el, i, _arr) {
    return el * el
})
console.log(arr)
console.log(arr1)
console.log(arr2)

