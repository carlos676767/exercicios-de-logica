//omit serve basicamente para fazer uma copia do meu objeto so tirando um determinado tipagem que eu nao quero

interface dadosPessoais {
    nome: string,
    idade: string,
    cpf: string
}

interface NovosDdos extends Omit <dadosPessoais, "cpf"> {}

const addDados: NovosDdos = {
    nome: "silva",
    idade: "20"
}
