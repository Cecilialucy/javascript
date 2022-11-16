// Desafio conta bancária
/*
1. Criar conta abstrata contaBancaria
   - cliente
   - número
   - saldo
   - depositar(valor)
   - sacar(valor)
*/

class ContaBancaria {
    constructor(cliente, numero) {
        if (this.constructor === ContaBancaria) {
            throw new Error("ContaBancária é uma classe abstrata")
        }
        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    depositar(valor) {
        this.saldo += valor
    }
    sacar() {
        throw new Error("método sacar() precisa ser implementado")
    }
}

const conta = new ContaBancaria("Fabiano", 1)