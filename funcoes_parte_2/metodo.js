function latir() {
    console.log(this.name, "fala: au au")
}

function miar() {
    console.log(this.name, "fala miau")
}


const dog = {
    name: "Rex",
    falar: function latir() {
        console.log(this.name, "fala: au au")
    },
    falar2() {
        console.log("falar 2")
    }
}

const cat = {
    name: "Mingau",
    falar: miar
}

dog.falar();
dog.falar2();
cat.falar();