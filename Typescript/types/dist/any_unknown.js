"use strict";
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    return "precisa passar números";
}
const teste = add(3, 5);
