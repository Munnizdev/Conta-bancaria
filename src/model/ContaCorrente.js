"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
class ContaCorrente extends Conta_1.Conta {
    constructor(numero, agencia, tipo, titular, saldo, limite) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(limite) {
        this._limite = limite;
    }
    sacar(valor) {
        if ((this.saldo + this._limite) < valor) {
            console.log('\nSaldo insuficiente!');
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    }
    visualizar() {
        super.visualizar();
        console.log(`Limite da conta: ${this._limite.toFixed(2)}`);
        console.log("****************************************\n\n");
    }
}
exports.ContaCorrente = ContaCorrente;
