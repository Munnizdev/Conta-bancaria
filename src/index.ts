import { Conta } from "./model/Contas";

const conta = new Conta(1, 123, 1, "Adriana", 10000);

// Visualiza
conta.visualizar();

// Tentativa de saque maior que saldo
conta.sacar(20000);
conta.visualizar();

// Depósito
conta.depositar(5000);
conta.visualizar();
