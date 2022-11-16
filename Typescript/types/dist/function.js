"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
const multiply = (x, y) => {
    return x * y;
};
const subtract = (x, y) => x - y;
let teste = subtract(3, 1);
let gabriel = {
    name: "Gabriel",
    id: 0,
    isAdmin: true,
    level: "teacher"
};
const isAdmin = (user) => !!user.isAdmin;
console.log(isAdmin(gabriel)); // true
let maria = {
    name: "Maria",
    id: 1
};
console.log(isAdmin(maria)); // false
exports.default = 2;
