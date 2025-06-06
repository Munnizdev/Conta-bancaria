import * as readline from 'readline-sync';
import { Colors } from './util/colors';

class Conta {
  constructor(
    public numero: number,
    public nome: string,
    public cpf: string,
    public saldo: number
  ) {}
}

export class Menu {
  private contas: Conta[] = [];
  private contadorContas: number = 1;

  exibir(): void {
    let continuar = true;

    while (continuar) {
      console.log(Colors.fgYellow + "******************************************************");
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

      const opcao = readline.question("Entre com a opcao desejada: " + Colors.reset);

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
          console.log(Colors.fgRed + "Saindo..." + Colors.reset);
          continuar = false;
          break;
        default:
          console.log(Colors.fgRed + "Opção inválida!" + Colors.reset);
      }
    }
  }

  private criarConta(): void {
    console.log(Colors.fgGreen + "\n=== Criar Conta ===" + Colors.reset);
    const nome = readline.question("Digite o nome do titular: ");
    const cpf = readline.question("Digite o CPF do titular: ");
    const saldoInicial = readline.questionFloat("Digite o saldo inicial: ");

    const conta = new Conta(this.contadorContas++, nome, cpf, saldoInicial);
    this.contas.push(conta);

    console.log(Colors.fgGreen + `Conta criada com sucesso! Número da conta: ${conta.numero}\n` + Colors.reset);
  }

  private listarContas(): void {
    console.log(Colors.fgGreen + "\n=== Lista de Contas ===" + Colors.reset);
    if (this.contas.length === 0) {
      console.log("Nenhuma conta cadastrada.\n");
      return;
    }

    for (const conta of this.contas) {
      console.log(`Número: ${conta.numero} | Titular: ${conta.nome} | CPF: ${conta.cpf} | Saldo: R$ ${conta.saldo.toFixed(2)}`);
    }
    console.log();
  }

  private buscarContaPorNumero(): void {
    console.log(Colors.fgGreen + "\n=== Buscar Conta por Número ===" + Colors.reset);
    const numero = readline.questionInt("Digite o número da conta: ");

    const conta = this.contas.find(c => c.numero === numero);

    if (!conta) {
      console.log(Colors.fgRed + "Conta não encontrada.\n" + Colors.reset);
      return;
    }

    console.log(`Número: ${conta.numero} | Titular: ${conta.nome} | CPF: ${conta.cpf} | Saldo: R$ ${conta.saldo.toFixed(2)}\n`);
  }

  private atualizarConta(): void {
    console.log(Colors.fgGreen + "\n=== Atualizar Dados da Conta ===" + Colors.reset);
    const numero = readline.questionInt("Digite o número da conta que deseja atualizar: ");
    const conta = this.contas.find(c => c.numero === numero);

    if (!conta) {
      console.log(Colors.fgRed + "Conta não encontrada.\n" + Colors.reset);
      return;
    }

    const novoNome = readline.question(`Digite o novo nome (atual: ${conta.nome}): `);
    const novoCpf = readline.question(`Digite o novo CPF (atual: ${conta.cpf}): `);

    if (novoNome.trim() !== '') conta.nome = novoNome;
    if (novoCpf.trim() !== '') conta.cpf = novoCpf;

    console.log(Colors.fgGreen + "Dados atualizados com sucesso!\n" + Colors.reset);
  }

  private apagarConta(): void {
    console.log(Colors.fgGreen + "\n=== Apagar Conta ===" + Colors.reset);
    const numero = readline.questionInt("Digite o número da conta que deseja apagar: ");
    const index = this.contas.findIndex(c => c.numero === numero);

    if (index === -1) {
      console.log(Colors.fgRed + "Conta não encontrada.\n" + Colors.reset);
      return;
    }

    this.contas.splice(index, 1);
    console.log(Colors.fgGreen + "Conta removida com sucesso.\n" + Colors.reset);
  }

  private sacar(): void {
    console.log(Colors.fgGreen + "\n=== Saque ===" + Colors.reset);
    const numero = readline.questionInt("Digite o número da conta: ");
    const conta = this.contas.find(c => c.numero === numero);

    if (!conta) {
      console.log(Colors.fgRed + "Conta não encontrada.\n" + Colors.reset);
      return;
    }

    const valor = readline.questionFloat("Digite o valor do saque: ");
    if (valor > conta.saldo) {
      console.log(Colors.fgRed + "Saldo insuficiente.\n" + Colors.reset);
      return;
    }

    conta.saldo -= valor;
    console.log(Colors.fgGreen + "Saque realizado com sucesso.\n" + Colors.reset);
  }

  private depositar(): void {
    console.log(Colors.fgGreen + "\n=== Depósito ===" + Colors.reset);
    const numero = readline.questionInt("Digite o número da conta: ");
    const conta = this.contas.find(c => c.numero === numero);

    if (!conta) {
      console.log(Colors.fgRed + "Conta não encontrada.\n" + Colors.reset);
      return;
    }

    const valor = readline.questionFloat("Digite o valor do depósito: ");
    conta.saldo += valor;

    console.log(Colors.fgGreen + "Depósito realizado com sucesso.\n" + Colors.reset);
  }

  private transferir(): void {
    console.log(Colors.fgGreen + "\n=== Transferência ===" + Colors.reset);
    const origemNumero = readline.questionInt("Digite o número da conta de origem: ");
    const destinoNumero = readline.questionInt("Digite o número da conta de destino: ");
    const valor = readline.questionFloat("Digite o valor da transferência: ");

    const contaOrigem = this.contas.find(c => c.numero === origemNumero);
    const contaDestino = this.contas.find(c => c.numero === destinoNumero);

    if (!contaOrigem || !contaDestino) {
      console.log(Colors.fgRed + "Conta de origem ou destino não encontrada.\n" + Colors.reset);
      return;
    }

    if (valor > contaOrigem.saldo) {
      console.log(Colors.fgRed + "Saldo insuficiente na conta de origem.\n" + Colors.reset);
      return;
    }

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    console.log(Colors.fgGreen + "Transferência realizada com sucesso.\n" + Colors.reset);
  }
}
