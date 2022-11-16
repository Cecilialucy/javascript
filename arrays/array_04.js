let arr = [1, 3, 5, 7, 9]

//push():
let teste = arr.push(11, 13, true, 'olá mundo')
console.log(teste); // 9
console.log(arr); // 1, 3, 5, 7, 9, 11, 13, true, 'olá mundo'

//pop():
let ultimoItem = arr.pop()
//let ultimoItem = arr[arr.length - 1]  1, 3, 5, 7, 9, 11, 13, true, 'olá mundo
console.log(ultimoItem); // olá mundo
console.log(arr); // 1, 3, 5, 7, 9, 11, 13, true

//shift():
let primeiroItem = arr.shift()
console.log(primeiroItem); // 1
console.log(arr); //  3, 5, 7, 9, 11, 13, true

//unshift():
teste = arr.unshift(4, 5, 6)
console.log(teste); // 10
console.log(arr); // 4, 5, 6, 3, 5, 7, 9, 11, 13, true

//slice():
let arr2 = arr.slice(2, 4)
console.log(arr2); // 6, 3
console.log(arr); // 4, 5, 6, 3, 5, 7, 9, 11, 13, true

//splice():
let arr3 = arr.splice(2, 4)
console.log(arr); // 4, 5, 9, 11, 13, true 
console.log(arr3); // 6, 3, 5, 7
