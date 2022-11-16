let tipo = ""
//const tiposPermitidos ={"mamífero": true, "anfíbio": true, "rétil": true };
const tiposPermitidos = ["mamífero", "anfíbio"];

const cachorro = {
    name: "Rex",
    get tipo() {
        return tipo
    },
    set tipo(_tipo) {
        //if (tiposPermitidos_tipo)
        if (tiposPermitidos.indexOf(_tipo) >= 0) {
            tipo = _tipo
        }
    }
}

    // IIFE para evitar sujar o escopo global
    ; (function () {
        let tipo = ""
        //const tiposPermitidos ={"mamífero": true, "anfíbio": true, "rétil": true };
        const tiposPermitidos = ["mamífero", "anfíbio"];

        const gato = {
            name: "Mingau",
            get tipo() {
                return tipo
            },
            set tipo(_tipo) {
                //if (tiposPermitidos_tipo)
                if (tiposPermitidos.indexOf(_tipo) >= 0) {
                    tipo = _tipo
                }
            }
        }
        this.gato = gato

    })()


console.log(gato);
console.log(gato.tipo = "mamífero");
console.log(gato.tipo);
//console.log();
//console.log();