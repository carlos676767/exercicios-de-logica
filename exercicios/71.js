
//Exercício: Encontrar o Número Mínimo

//Declare uma função chamada encontrarNumeroMinimo.
//Inicialize uma variável chamada numeroMinimo com o valor do primeiro elemento do array (índice 0).
//Use um loop for para percorrer o array, começando do segundo elemento (índice 1) até o último elemento.
//Em cada iteração, compare o elemento atual com o valor armazenado em numeroMinimo. Se o elemento atual for menor do que numeroMinimo, atualize numeroMinimo com o valor do elemento atual.
//Após o término do loop, retorne o valor de numeroMinimo como resultado, pois esse será o número mínimo no array.
//Essas etapas simplificadas devem ajudá-lo a entender o que a função faz. Ela encontra o número mínimo em um array percorrendo todos os elementos do array e comparando-os 
//com o valor atual do número mínimo. O menor valor encontrado é armazenado em numeroMinimo e retornado como resultado.

let array = [30,4,5,1,6,8,9] //cria uma array
let resultado = encontrarNumeroMinimo(array) //recebe minha funcao em uma varivel
console.log(`o numero minimo encontrado na array foi o ${resultado}`); //mostra qual e o numero menor

function encontrarNumeroMinimo() { //cria uma funcao
  let numeroMinimo = array[0] //cria uma variavel que recebe minha array do indice zero
  for(let i = 1; i < array.length; ++i){ //percorre minha array comecando do indice 1
    if (array[i] < numeroMinimo) { //compara se meu numero atual e menor que a o numero minimo 
        numeroMinimo = array[i] //se for o numero minimo recebe a array 
    }
  } return numeroMinimo //retorna o numero
}

