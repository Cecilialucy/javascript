// Desafio conta bancária
/*
2. Criar classe Cliente e compor as classes concretas 
   - nome
   - documento
   
*/

class Cliente {
    constructor(nome, documento) {
        this.nome = nome
        this.documento = documento
    }
}

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

class ContaPoupanca extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.aniversario = Date.now()
    }
    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.limite = 0

    }
    sacar(valor) {
        let disponivel = this.saldo + this.limite
        if (valor > disponivel) {
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

const fabiano = new Cliente("Fabiano", 1);
const maria = new Cliente("Maria", 2);

const cp1 = new ContaPoupanca(fabiano, 1);
const cp2 = new ContaPoupanca(maria, 2);
const cc1 = new ContaCorrente(maria, 3)
cp1.depositar(1000);
cc1.limite = 1000;
cc1.depositar(2000);
cc1.sacar(2000);
cp1.sacar(1000);
console.log(cp1);
console.log(cp2);