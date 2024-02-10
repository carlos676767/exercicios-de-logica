type pessoa = {
    nome: string,
    idade: string,
    cidade: string
}

const pessoa: pessoa = {
    nome: `ana`,
    idade: `25`,
    cidade: `mt`
}

//acessando propriedade de um objeto
console.log(Object.keys(pessoa))

//acessando propriedades e valores de um objeto
console.log(Object.entries(pessoa))