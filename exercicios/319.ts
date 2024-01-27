
let numero: number = 25
console.log(numero)

class Pessoa {
    name: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.name = nome;
        this.idade = idade;
    }
}

const novaPessoa = new Pessoa(`carlos`, 19)
console.log(novaPessoa)
