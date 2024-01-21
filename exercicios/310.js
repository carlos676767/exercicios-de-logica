//objetos literais

const pessoa = {
  nome: "carlos",
  idade: "19",
  cidade: "sorriso",
};

console.log(`a pessoa ${pessoa.nome} tem ${pessoa.idade}, mora em ${pessoa.cidade}`);

//usando funcao e um objeto
const comidas = {
    arroz: "40 cal",
    banana: "35cal",
    receberAliementos: () => {
        console.log(`A banana tem ${comidas.banana} e o arroz tem ${comidas.arroz}`);
    }
};

comidas.receberAliementos()