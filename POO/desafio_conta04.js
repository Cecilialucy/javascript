// Desafio conta bancária
/*
4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Jurídica
   - Pessoa Física tem documento CPF e Pessoa Jurídica tem documento CNPJ

   
*/

class Cliente {
    constructor(nome, documento, tipoDocumento) {
        if (this.constructor === Cliente) {
            throw new Error("Cliente é uma classe abstrata")
        }
        this.nome = nome
        this.documento = documento
        this.tipoDocumento = tipoDocumento
    }
}

class PessoaFisica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CPF")
        this.cpf = documento
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CNPJ")
        this.cnpj = documento
    }
}
const cliente1 = new PessoaFisica("fabiano", "13.133.144-55");
const cliente2 = new PessoaJuridica("fabiano lanches", "122.133.144/001-01")

console.log(cliente1);
console.log(cliente2);

class ContaBancaria {
    constructor(cliente, numero) {
        if (this.constructor === ContaBancaria) {
            throw new Error("ContaBancária é uma classe abstrata")
        }
        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    get dadosCliente() {
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
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

const fabiano = new PessoaFisica("Fabiano", "12.133.144-10");
const maria = new PessoaJuridica("Maria", "123.123.123/001-01");

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
console.log(cc1.dadosCliente);
console.log(cp1.dadosCliente);