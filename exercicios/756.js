class Pessoa {
  #nome;
  constructor(nome) {
    this.#nome = nome;
  }

  alterarNome(novoNome) {
    if (typeof novoNome === "string" && novoNome.length >= 3) {
      this.#nome = novoNome;
    }
  }
  retornarName() {
    return this.#nome;
  }
};

const p1 = new Pessoa("carlos");
console.log(p1.retornarName());
p1.alterarNome("ana");
console.log(p1.retornarName());
