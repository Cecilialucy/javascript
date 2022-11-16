let arr = [4, 5, 10, 20, 35, 4, 5]

//indexOf:
console.log(arr.indexOf(5)); // 1
console.log(arr.indexOf(55555)); // -1

//lastIndex
console.log(arr.lastIndexOf(5)); // 6
console.log(arr.lastIndexOf(55555)); // -1

//includes:
console.log(arr.includes(55555));  // false
console.log(arr.includes(5));  // true

//find:
console.log(arr.find(function (el) {
    return el > 10
})); // 20
console.log(arr.find(function (el) {
    return el > 1000
})); // undefined

//findIndex:
console.log(arr.findIndex(function (el) {
    return el > 10
})); // 3
console.log(arr.findIndex(function (el) {
    return el > 1000
})); // -1
