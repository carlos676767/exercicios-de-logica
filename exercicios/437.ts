//classses e objetos

class Animal {
  raca: string;
  idade: number;
  cor: string;
  constructor(raca, idade, cor) {
    this.raca = raca;
    this.idade = idade;
    this.cor = cor;
  }

  construirAnimal() {
    console.log(`era uma vez ${this.raca} e ele comecou a andar`);
  }
}

const gato = new Animal("siames", 25, "branca");
console.log(gato);

//chama o metodo da classe

gato.construirAnimal();