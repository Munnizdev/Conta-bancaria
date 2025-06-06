"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(_numero, _agencia, _tipo, _titular, _saldo) {
        this._numero = _numero;
        this._agencia = _agencia;
        this._tipo = _tipo;
        this._titular = _titular;
        this._saldo = _saldo;
    }
    get numero() { return this._numero; }
    set numero(valor) { this._numero = valor; }
    get agencia() { return this._agencia; }
    set agencia(valor) { this._agencia = valor; }
    get tipo() { return this._tipo; }
    set tipo(valor) { this._tipo = valor; }
    get titular() { return this._titular; }
    set titular(valor) { this._titular = valor; }
    get saldo() { return this._saldo; }
    set saldo(valor) { this._saldo = valor; }
    sacar(valor) {
        if (valor > this._saldo) {
            console.log("\nSaldo Insuficiente!");
            return false;
        }
        this._saldo -= valor;
        return true;
    }
    depositar(valor) {
        this._saldo += valor;
    }
    visualizar() {
        const tipo = this._tipo === 1 ? "Conta Corrente"
            : this._tipo === 2 ? "Conta Poupança"
                : "Tipo Desconhecido";
        console.log("\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log(`Número da Conta: ${this._numero}`);
        console.log(`Agência: ${this._agencia}`);
        console.log(`Tipo da Conta: ${tipo}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: R$ ${this._saldo.toFixed(2)}`);
    }
}
exports.Conta = Conta;
