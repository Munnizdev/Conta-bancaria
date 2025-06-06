"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const readline = __importStar(require("readline-sync"));
const colors_1 = require("./util/colors");
class Conta {
    constructor(numero, nome, cpf, saldo) {
        this.numero = numero;
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
    }
}
class Menu {
    constructor() {
        this.contas = [];
        this.contadorContas = 1;
    }
    exibir() {
        let continuar = true;
        while (continuar) {
            console.log(colors_1.Colors.fgYellow + "******************************************************");
            console.log("******************************************************");
            console.log("            BANCO DO BRAZIL COM Z");
            console.log("******************************************************");
            console.log("******************************************************");
            console.log("1 - Criar Conta");
            console.log("2 - Listar todas as Contas");
            console.log("3 - Buscar Conta por Numero");
            console.log("4 - Atualizar Dados da Conta");
            console.log("5 - Apagar Conta");
            console.log("6 - Sacar");
            console.log("7 - Depositar");
            console.log("8 - Transferir valores entre Contas");
            console.log("9 - Sair");
            console.log("******************************************************");
            const opcao = readline.question("Entre com a opcao desejada: " + colors_1.Colors.reset);
            switch (opcao) {
                case "1":
                    this.criarConta();
                    break;
                case "2":
                    this.listarContas();
                    break;
                case "3":
                    this.buscarContaPorNumero();
                    break;
                case "4":
                    this.atualizarConta();
                    break;
                case "5":
                    this.apagarConta();
                    break;
                case "6":
                    this.sacar();
                    break;
                case "7":
                    this.depositar();
                    break;
                case "8":
                    this.transferir();
                    break;
                case "9":
                    console.log(colors_1.Colors.fgRed + "Saindo..." + colors_1.Colors.reset);
                    continuar = false;
                    break;
                default:
                    console.log(colors_1.Colors.fgRed + "Opção inválida!" + colors_1.Colors.reset);
            }
        }
    }
    criarConta() {
        console.log(colors_1.Colors.fgGreen + "\n=== Criar Conta ===" + colors_1.Colors.reset);
        const nome = readline.question("Digite o nome do titular: ");
        const cpf = readline.question("Digite o CPF do titular: ");
        const saldoInicial = readline.questionFloat("Digite o saldo inicial: ");
        const conta = new Conta(this.contadorContas++, nome, cpf, saldoInicial);
        this.contas.push(conta);
        console.log(colors_1.Colors.fgGreen + `Conta criada com sucesso! Número da conta: ${conta.numero}\n` + colors_1.Colors.reset);
    }
    listarContas() {
        console.log(colors_1.Colors.fgGreen + "\n=== Lista de Contas ===" + colors_1.Colors.reset);
        if (this.contas.length === 0) {
            console.log("Nenhuma conta cadastrada.\n");
            return;
        }
        for (const conta of this.contas) {
            console.log(`Número: ${conta.numero} | Titular: ${conta.nome} | CPF: ${conta.cpf} | Saldo: R$ ${conta.saldo.toFixed(2)}`);
        }
        console.log();
    }
    buscarContaPorNumero() {
        console.log(colors_1.Colors.fgGreen + "\n=== Buscar Conta por Número ===" + colors_1.Colors.reset);
        const numero = readline.questionInt("Digite o número da conta: ");
        const conta = this.contas.find(c => c.numero === numero);
        if (!conta) {
            console.log(colors_1.Colors.fgRed + "Conta não encontrada.\n" + colors_1.Colors.reset);
            return;
        }
        console.log(`Número: ${conta.numero} | Titular: ${conta.nome} | CPF: ${conta.cpf} | Saldo: R$ ${conta.saldo.toFixed(2)}\n`);
    }
    atualizarConta() {
        console.log(colors_1.Colors.fgGreen + "\n=== Atualizar Dados da Conta ===" + colors_1.Colors.reset);
        const numero = readline.questionInt("Digite o número da conta que deseja atualizar: ");
        const conta = this.contas.find(c => c.numero === numero);
        if (!conta) {
            console.log(colors_1.Colors.fgRed + "Conta não encontrada.\n" + colors_1.Colors.reset);
            return;
        }
        const novoNome = readline.question(`Digite o novo nome (atual: ${conta.nome}): `);
        const novoCpf = readline.question(`Digite o novo CPF (atual: ${conta.cpf}): `);
        if (novoNome.trim() !== '')
            conta.nome = novoNome;
        if (novoCpf.trim() !== '')
            conta.cpf = novoCpf;
        console.log(colors_1.Colors.fgGreen + "Dados atualizados com sucesso!\n" + colors_1.Colors.reset);
    }
    apagarConta() {
        console.log(colors_1.Colors.fgGreen + "\n=== Apagar Conta ===" + colors_1.Colors.reset);
        const numero = readline.questionInt("Digite o número da conta que deseja apagar: ");
        const index = this.contas.findIndex(c => c.numero === numero);
        if (index === -1) {
            console.log(colors_1.Colors.fgRed + "Conta não encontrada.\n" + colors_1.Colors.reset);
            return;
        }
        this.contas.splice(index, 1);
        console.log(colors_1.Colors.fgGreen + "Conta removida com sucesso.\n" + colors_1.Colors.reset);
    }
    sacar() {
        console.log(colors_1.Colors.fgGreen + "\n=== Saque ===" + colors_1.Colors.reset);
        const numero = readline.questionInt("Digite o número da conta: ");
        const conta = this.contas.find(c => c.numero === numero);
        if (!conta) {
            console.log(colors_1.Colors.fgRed + "Conta não encontrada.\n" + colors_1.Colors.reset);
            return;
        }
        const valor = readline.questionFloat("Digite o valor do saque: ");
        if (valor > conta.saldo) {
            console.log(colors_1.Colors.fgRed + "Saldo insuficiente.\n" + colors_1.Colors.reset);
            return;
        }
        conta.saldo -= valor;
        console.log(colors_1.Colors.fgGreen + "Saque realizado com sucesso.\n" + colors_1.Colors.reset);
    }
    depositar() {
        console.log(colors_1.Colors.fgGreen + "\n=== Depósito ===" + colors_1.Colors.reset);
        const numero = readline.questionInt("Digite o número da conta: ");
        const conta = this.contas.find(c => c.numero === numero);
        if (!conta) {
            console.log(colors_1.Colors.fgRed + "Conta não encontrada.\n" + colors_1.Colors.reset);
            return;
        }
        const valor = readline.questionFloat("Digite o valor do depósito: ");
        conta.saldo += valor;
        console.log(colors_1.Colors.fgGreen + "Depósito realizado com sucesso.\n" + colors_1.Colors.reset);
    }
    transferir() {
        console.log(colors_1.Colors.fgGreen + "\n=== Transferência ===" + colors_1.Colors.reset);
        const origemNumero = readline.questionInt("Digite o número da conta de origem: ");
        const destinoNumero = readline.questionInt("Digite o número da conta de destino: ");
        const valor = readline.questionFloat("Digite o valor da transferência: ");
        const contaOrigem = this.contas.find(c => c.numero === origemNumero);
        const contaDestino = this.contas.find(c => c.numero === destinoNumero);
        if (!contaOrigem || !contaDestino) {
            console.log(colors_1.Colors.fgRed + "Conta de origem ou destino não encontrada.\n" + colors_1.Colors.reset);
            return;
        }
        if (valor > contaOrigem.saldo) {
            console.log(colors_1.Colors.fgRed + "Saldo insuficiente na conta de origem.\n" + colors_1.Colors.reset);
            return;
        }
        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;
        console.log(colors_1.Colors.fgGreen + "Transferência realizada com sucesso.\n" + colors_1.Colors.reset);
    }
}
exports.Menu = Menu;
