function teste(str) {

    return "fn expression" + str
}

const testeArrow = (str, n) => "fn arrow - " + str + " - " + n

// const testeArrow2 = () => {
//     console.log("teste arrow 2 chamado")
//     return {
//         foo: "bar"
//     }
// }

const testeArrow2 = () => ({
    foo: "bar"
})



const t1 = testeArrow("parâmetro para arrow fn", 10);
console.log(t1);

const t2 = testeArrow2()
console.log(t2);
console.log(t2.foo);
console.log(t2["foo"]);