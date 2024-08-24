class Pessoa {
  private name: string | null;
  constructor(name: string | null) {
    this.name = name;
  }

  protected set nomesCoMc(nome: string) {
    if (nome[0] == "c") {
      this.name = nome;
    }
    this.name = null;
  }
  
  protected get getNameComC() {
    return this.name;
  }
}

class obterNomesComC extends Pessoa {
  constructor(nome: string) {
    super(nome);
  }

  public countNamesA() {
    const namesArr = this.getNameComC;
    if (namesArr == null) return;
    let contador: number = 0;
    let i = 0;
    while (i < namesArr.toString().length) {
      if (namesArr.toString()[i] == "a") {
        ++contador;
      }
      ++i;
    }
    return contador;
  }
}

const pessoa = new obterNomesComC("caaaaaa");
console.log(pessoa.countNamesA());
