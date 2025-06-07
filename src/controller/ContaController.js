"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaController = void 0;
class ContaController {
    constructor() {
        this.listaContas = new Array();
        this.numero = 0;
    }
    procurarPorNumero(numero) {
        let buscaConta = this.buscarNoArray(numero);
        if (buscaConta !== null) {
            buscaConta.visualizar();
        }
        else {
            console.log(`A conta número: ${numero} não foi encontada!`);
        }
    }
    listarTodas() {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    cadastrar(conta) {
        this.listaContas.push(conta);
        console.log(`\nA conta número: ${conta.numero} foi criada com sucesso!`);
    }
    atualizar(conta) {
        let buscaConta = this.buscarNoArray(conta.numero);
        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`A conta número ${conta.numero} foi atualizada com sucesso!`);
        }
        else {
            console.log(`A conta número: ${conta.numero} não foi encontrada!`);
        }
    }
    deletar(numero) {
        let buscaConta = this.buscarNoArray(numero);
        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(`A conta número ${numero} foi apagada com sucesso!`);
        }
        else {
            console.log(`A conta número: ${numero} não foi encontrada!`);
        }
    }
    sacar(numero, valor) {
        let conta = this.buscarNoArray(numero);
        if (conta !== null) {
            if (conta.sacar(valor) === true) {
                console.log(`O saque na conta ${numero} foi efetuado com sucesso!`);
            }
            else {
                console.log(`A conta número: ${numero} não foi encontrada!`);
            }
        }
    }
    depositar(numero, valor) {
        let conta = this.buscarNoArray(numero);
        if (conta !== null) {
            conta.depositar(valor);
            console.log(`O depósito na conta número: ${numero} foir efetuado com sucesso!`);
        }
        else {
            console.log(`A conta número: ${numero} não foi encontrada!`);
        }
    }
    transferir(numeroOrigem, numeroDestino, valor) {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);
        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor);
                console.log(`A Transferência da conta número: ${numeroOrigem} para a conta número: ${numeroDestino} foi efetuada com sucesso!`);
            }
        }
        else {
            console.log(`A conta numero: ${numeroOrigem} e/ou a conta número: ${numeroDestino} não foram encontradas!`);
        }
    }
    /*Metodos Auxiliares */
    /* Gerar número da Conta */
    gerarNumero() {
        return ++this.numero;
    }
    /* Checar se uma conta existe na lista */
    buscarNoArray(numero) {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
}
exports.ContaController = ContaController;
