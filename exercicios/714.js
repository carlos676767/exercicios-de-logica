function Animal(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const arr = [];
const novoCachorro = new Animal("carlinhos", "20");
arr.push(novoCachorro);

Animal.prototype.animalCorrer = () => {
  console.log("auauau");
};

console.log(arr);

console.log(novoCachorro);
novoCachorro.animalCorrer();
