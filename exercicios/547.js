ola();

function ola() {
  console.log("ola mundo");
}
ola();

class Pessoa {
  constructor(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
  }
  executar() {
    console.log(`${this.nome} tem idade ${this.idade} e peso ${this.peso}`);
  }
}

const pessoa = new Pessoa("carlos", "18", "1.98");
