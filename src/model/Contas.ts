export class Conta {
  constructor(
    private _numero: number,
    private _agencia: number,
    private _tipo: number,
    private _titular: string,
    private _saldo: number
  ) {}

  get numero() { return this._numero; }
  set numero(valor: number) { this._numero = valor; }

  get agencia() { return this._agencia; }
  set agencia(valor: number) { this._agencia = valor; }

  get tipo() { return this._tipo; }
  set tipo(valor: number) { this._tipo = valor; }

  get titular() { return this._titular; }
  set titular(valor: string) { this._titular = valor; }

  get saldo() { return this._saldo; }
  set saldo(valor: number) { this._saldo = valor; }

  sacar(valor: number): boolean {
    if (valor > this._saldo) {
      console.log("\nSaldo Insuficiente!");
      return false;
    }
    this._saldo -= valor;
    return true;
  }

  depositar(valor: number): void {
    this._saldo += valor;
  }

  visualizar(): void {
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
