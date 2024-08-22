// Sistema de Contas Bancárias

// Crie uma classe base ContaBancaria com propriedades privadas numeroConta e saldo.
// Adicione métodos para depositar e sacar dinheiro. Crie duas classes
// derivadas: ContaCorrente (com uma propriedade limite e um método para verificar
//se um saque é possível) e
//  ContaPoupanca (com uma propriedade taxaJuros e um método para aplicar juros ao saldo).

class ContaBancaria {
  protected createCount: string;
  protected saldo: number;
  constructor(createCount: string, saldo: number) {
    this.createCount = createCount;
    this.saldo = saldo;
  }

  public criarConta(): string | undefined {
    if (this.createCount == "sim") {
      const randomCountNumber = Array.from(Array(5).keys())
        .map((arr) => Math.floor(Math.random() * 10) + 1)
        .join("");
      return randomCountNumber;
    }
  }

  public addSaldoCount() {
    const count = this.criarConta()
    let mySaldo = "";
    if (typeof count == "number") {
      mySaldo += this.saldo;
      console.log(`novo saldo ${this.saldo}`);
      return mySaldo;
    }
    console.log("crie uma conta para add um saldo");
  }
}

class CountCorrente extends ContaBancaria {
  private retiredSaldo: number;
  constructor(createCount: string, saldo: number, retiredSaldo: number) {
    super(createCount, saldo);
    this.retiredSaldo = retiredSaldo;
  }

  public sacarContaCorrente(): void {
    if (this.saldo <= 100 && this.saldo <= 2000) {
      this.saldo -= this.retiredSaldo;
      console.log(`novo saldo ${this.saldo}`);
    }
    console.log("sua conta nao foi criada ou foi digitado um saldo muito alto.");
  }
}

const conta = new CountCorrente('sim', 4000, 500) 
conta.criarConta()
conta.addSaldoCount()
conta.sacarContaCorrente()
