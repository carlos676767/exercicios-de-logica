//crie uma array
//crie uma funcao
//crie um array vazio com sua array do indice zero
//percorra toda sua array original
//faca uma verificao se menor
// faca seu vazio receber array
//use um else para verificar se o conteudo que tem na sua array e o mesmo numero de palavras que a outra, se for retorne o valor na sua array.
//retorne o vazio 
//exiba crie uma variavel que vai receber a funcao


const array = ["carro", "casa", "c"]; //cria uma array

function receber() { //cria uma funcao 
    let vazio = array[0] //cria uma variavel com indice zero da array
    for(let i = 0; i < array.length; ++i){ //percorre todo o array
        if (array[i] < vazio) { //verifica se o conteudo que na minha array e o menor que o conteudo de vazio
            vazio = array[i] //recebe a menor palavra
        }else{ // se nao
            array[i] === array[i] //verifica se as palavras da array sao do mesmo tanto de letra
            vazio = array[0] //vazio recebe array com indice zero
        }
    } return vazio //retorna o valor.
}

let resultado = receber() //resultado recebe a funcao
console.log(resultado); //exibe o resultado ao usuario




