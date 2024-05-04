class Pessoa {
  nome: string;
  cpf: number;
  idade: number;
  constructor(nome, idade, cpf) {
    this.nome = nome;
    this.nome = idade;
    this.cpf = cpf;
  }
  //metodo da classe que e basicamente as acoes do objeto
  acoesPessoa() {
    console.log(
      `era uma vez ${this.nome} e tinha uma idade de ${this.idade}, seu cpf era ${this.cpf}`
    );
  }
}

//instancia
const novaPessoa = new Pessoa("carlos", 20, 441114);

//chamando metodo da classe 
novaPessoa.acoesPessoa()
