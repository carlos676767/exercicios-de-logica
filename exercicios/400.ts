//Destructuring, basicamente e uma maneira mais simples de acessar um objeto.

interface Pessoa {
    nome: string
    idade: string
    estado: string
}

const pessoa: Pessoa = {
    nome: 'carlos',
    idade: "25",
    estado: "mato grosso"
}


const {nome, idade, estado} = pessoa
const {nome: silva} = pessoa
console.log(silva);
