//objetos 
const array = [
     {
        nome: "carlos"
    }
]

const dadosPessoais = {
    nome: "ana",
    idade: "23",
    cidade: "roraina",
}

const curriculo = {
    nomeCompleto: "juliana modas",
    idade: "23",
    cidade: "cuaiba", 
    funcao: () => {
       console.log(`${curriculo.nomeCompleto} mora em ${curriculo.cidade}`);
    }
}

curriculo.funcao()
class carro {
    constructor(ano, marca){
        this.marca = marca
        this.ano = ano
    }
}

class pessoa {
    constructor(nome, idade, cidade){
        this.nomeCompleto = nome
        this.idade = idade
        this.cidade = cidade
    }
}

const meuCarro = new carro("hb20", "2014")
const criarPessoa = new pessoa("carlos silva", "19", "sorriso")
console.log(criarPessoa);
console.log(meuCarro);
console.log(array);

