const pessoas = {}
pessoas.nome = 'carlos'
pessoas.idade = '20'
const copia = { ...pessoas }
Object.freeze(pessoas)
pessoas.nome = 'joao'
copia.nome = 'joao'
console.log(pessoas);