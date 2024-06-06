const minimist = require("minimist");
const obterDados = minimist(process.argv);
console.log(obterDados["idade"], obterDados["nome"], obterDados["cpf"]);

class Pessoa {
  constructor(idade, nome, cpf) {
    this.idade = idade;
    this.nome = nome;
    this.cpf = cpf;
  }
  async acao() {
    console.log(`${this.nome}, tem ${this.idade} anos com o cpf ${this.cpf}`);
  }
}

const novaPessoa = new Pessoa(18, "carlos", "447447441147");
novaPessoa.acao();
console.log(novaPessoa);