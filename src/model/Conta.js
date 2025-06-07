"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, agencia, tipo, titular, saldo) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(agencia) {
        this._agencia = agencia;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get titular() {
        return this._titular;
    }
    set titular(titular) {
        this._titular = titular;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    sacar(valor) {
        if (this._saldo < valor) {
            console.log('\nSaldo insuficiente!');
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    visualizar() {
        let tipo = "";
        switch (this._tipo) {
            case 1:
                tipo = 'Conta Corrente';
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }
        console.log("\n\n****************************************");
        console.log('Dados da conta:');
        console.log("****************************************");
        console.log(`Numero da conta: ${this._numero}`);
        console.log(`Agência da conta: ${this._agencia}`);
        console.log(`Tipo da conta: ${tipo}`);
        console.log(`Titular da conta: ${this.titular}`);
        console.log(`Saldo da conta: ${this._saldo.toFixed(2)}`);
    }
}
exports.Conta = Conta;
