export abstract class Animal{
    constructor(protected readonly categoria: string) { }
    mostrarCategoria(): void {
        console.log(`A categoria é: ${this.categoria}`)
    }

    abstract mostrarDetalhes(): void
    abstract idade: number
}

interface AnimalInterface {
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number
    
}

const miica: AnimalInterface = {
    categoria: "mamífero",
    mostrarDetalhes(){
        console.log("fofa")
    }
    
    
}
console.log(miica)


    class Gato extends Animal {
        constructor(public nome: string, public idade: number) {
            super("mamífero")
        }

        mostrarDetalhes(){
            console.log("Mostrar detalhe chamado")
        }
    }

    interface CachorroInterface {
        latir(): void
    }

    class Cachorro implements AnimalInterface, CachorroInterface {
        constructor(public categoria: string, public readonly nome: string, public idade?: number) {}
        mostrarDetalhes() {
            console.log("Mostrar detalhes de Cachorro")
            console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1: "")
        }
        latir(){
            console.log(this.nome, "está latindo")
        }
    }
    
const mingau = new Gato("Mingau", 5)
console.log(mingau)

const toto = new Cachorro("mamífero", "toto")
toto.latir()