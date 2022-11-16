let arr1 = [1, 2, 3]
let arr2 = [5, 6, 7]

//toString():
console.log(arr1.toString()); // 1, 2, 3

// join():
console.log(arr1.join(" - ")); // 1 - 2 - 3

//concat():
let arr3 = arr1.concat(arr2);
console.log(arr3); // 1, 2, 3, 5, 6, 7
