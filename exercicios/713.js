const objetctAnimal = (raca, tipo) => {
  const animal = Object.create({});
  animal.nome = raca;
  animal.tipo = tipo;
  return animal;
};


class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
  
  animalCorrer() {
    console.log(`o ${this.nome} esta correndo e sua raca e ${this.tipo}`);
  }
}


const novoAniaml = new Animal("carlinho", "pitbul")
novoAniaml.animalCorrer()
console.log(objetctAnimal("pitbul", "dog"));
