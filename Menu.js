"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const readline_sync_1 = __importDefault(require("readline-sync"));
const Colors_1 = require("./src/util/Colors");
const ContaCorrente_1 = require("./src/model/ContaCorrente");
const ContaPoupanca_1 = require("./src/model/ContaPoupanca");
const ContaController_1 = require("./src/controller/ContaController");
function main() {
    let contas = new ContaController_1.ContaController();
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino;
    let titular;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];
    console.log("\nCriar Contas\n");
    let cc1 = new ContaCorrente_1.ContaCorrente(contas.gerarNumero(), 123, 1, "Andressa Muniz", 1000, 100.0);
    contas.cadastrar(cc1);
    let cc2 = new ContaCorrente_1.ContaCorrente(contas.gerarNumero(), 124, 1, "Romenia Amaro", 2000, 100.0);
    contas.cadastrar(cc2);
    let cp1 = new ContaPoupanca_1.ContaPoupanca(contas.gerarNumero(), 125, 2, "Roberta Santos", 4000, 12);
    contas.cadastrar(cp1);
    let cp2 = new ContaPoupanca_1.ContaPoupanca(contas.gerarNumero(), 125, 2, "Camila Silva", 8000, 15);
    contas.cadastrar(cp2);
    contas.listarTodas();
    while (true) {
        console.log(Colors_1.colors.fg.yellow);
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log('                BANCO DO BRAZIL COM                  ');
        console.log('                                                     ');
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log('            1 - Criar Conta                          ');
        console.log('            2 - Listar todas as Contas               ');
        console.log('            3 - Buscar Conta por Numero              ');
        console.log('            4 - Atualizar Dados da Conta             ');
        console.log('            5 - Apagar Conta                         ');
        console.log('            6 - Sacar                                ');
        console.log('            7 - Depositar                            ');
        console.log('            8 - Transferir valores entre Contas      ');
        console.log('            9 - Sair                                 ');
        console.log('                                                     ');
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log(Colors_1.colors.reset); // ← aqui volta à cor normal
        console.log('Entre com a opção desejada:');
        opcao = readline_sync_1.default.questionInt('');
        if (opcao === 9) {
            console.log('\nBanco do Brazil 9- O seu futuro começa aqui!');
            sobre();
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log('\n\nCriar Conta\n\n');
                console.log('\nDigite o número da agência: ');
                agencia = readline_sync_1.default.questionInt('');
                console.log('\nDigite o Nome do Titular da conta: ');
                titular = readline_sync_1.default.question('');
                console.log('\nDigite o tipo da conta: ');
                tipo = readline_sync_1.default.keyInSelect(tiposContas, '', { cancel: false }) + 1;
                console.log('\nDigite o saldo inicial da conta: ');
                saldo = readline_sync_1.default.questionFloat('');
                switch (tipo) {
                    case 1:
                        console.log('\nDigite o limite inicial da conta (R$):');
                        limite = readline_sync_1.default.questionFloat('');
                        contas.cadastrar(new ContaCorrente_1.ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log('\nDigite o dia do aniversário da Conta Poupança:');
                        aniversario = readline_sync_1.default.questionInt('');
                        contas.cadastrar(new ContaPoupanca_1.ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }
                keyPress();
                break;
            case 2:
                console.log('\n\nListar todas as Contas\n\n');
                contas.listarTodas();
                keyPress();
                break;
            case 3:
                console.log('\n\nConsultar dados da Conta - por número\n\n');
                console.log('Digite o número da conta: ');
                numero = readline_sync_1.default.questionInt('');
                contas.procurarPorNumero(numero);
                keyPress();
                break;
            case 4:
                console.log('\n\nAtualizar dados da Conta\n\n');
                console.log('\nDigite o número da conta: ');
                numero = readline_sync_1.default.questionInt('');
                let conta = contas.buscarNoArray(numero);
                if (conta !== null) {
                    console.log('\nDigite o número da agência: ');
                    agencia = readline_sync_1.default.questionInt('');
                    console.log('Digite o nome do titular da conta: ');
                    titular = readline_sync_1.default.question('');
                    tipo = conta.tipo;
                    console.log('Digite o saldo da conta (R$): ');
                    saldo = readline_sync_1.default.questionFloat('');
                    switch (tipo) {
                        case 1:
                            console.log('Digite o limite da conta (R$): ');
                            limite = readline_sync_1.default.questionFloat('');
                            contas.atualizar(new ContaCorrente_1.ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log('Digite o dia do aniversário da conta poupança: ');
                            aniversario = readline_sync_1.default.questionInt('');
                            contas.atualizar(new ContaPoupanca_1.ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                }
                else {
                    console.log(`\nA conta número ${numero} não foi encontrada`);
                }
                keyPress();
                break;
            case 5:
                console.log('\n\nApagar uma Conta\n\n');
                console.log('\nDigite o número da conta: ');
                numero = readline_sync_1.default.questionInt('');
                contas.deletar(numero);
                keyPress();
                break;
            case 6:
                console.log('\n\nSaque\n\n');
                console.log('\nDigite o número da conta: ');
                numero = readline_sync_1.default.questionInt('');
                console.log('\nDigite o valor do Saque (R$): ');
                valor = readline_sync_1.default.questionFloat('');
                contas.sacar(numero, valor);
                keyPress();
                break;
            case 7:
                console.log('\n\nDepósito\n\n');
                console.log('Digite o número da Conta: ');
                numero = readline_sync_1.default.questionInt('');
                console.log('Digite o valor do Depósito (R$): ');
                valor = readline_sync_1.default.questionFloat('');
                contas.depositar(numero, valor);
                keyPress();
                break;
            case 8:
                console.log('\n\nTransferência entre Contas\n\n');
                console.log('Digite o número da conta de Origem: ');
                numero = readline_sync_1.default.questionInt('');
                console.log('\nDigite o número da conta de Destino: ');
                numeroDestino = readline_sync_1.default.questionInt('');
                console.log('\nDigite o valor da transferência (R$): ');
                valor = readline_sync_1.default.questionFloat('');
                contas.transferir(numero, numeroDestino, valor);
                keyPress();
                break;
            default:
                console.log('\nOpção Inválida!\n');
                keyPress();
                break;
        }
    }
}
function sobre() {
    console.log('\n*****************************************************');
    console.log('Projeto Desenvolvido por: Andressa Muniz ');
    console.log('*****************************************************');
}
function keyPress() {
    console.log(Colors_1.colors.reset, '');
    console.log('\nPressione enter para continuar');
    readline_sync_1.default.prompt();
}
main();
