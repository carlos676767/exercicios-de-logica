//inicia as variaveis
let contador = 0
let vetor = []
let somar = 0
let receberposicoes = []
let maior = 0
let posicaomaioridade = 0

//inicia o loop
do {
    const idade = parseInt(prompt(`Digite sua idade`))
    vetor.push(idade)
    ++contador
} while(contador < 8)

//faz um loop na array

for (let i = 0; i < vetor.length; i++) {
  somar+= vetor[i] 
  if (vetor[i] >= 25) {
     receberposicoes.push(i)
  }

  if (vetor[i] > maior) {
    maior = vetor[i]
    posicaomaioridade = i
  }
}

//calcula a media
let media = somar/ vetor.length
console.log(`A media de idade e de ${media}`);
//exibe a posicao dos numeros 25
console.log(`A posicao dos numeros 25 e de ${receberposicoes}`);
//mostra o maior numero 
console.log(`A maior idade encontrada e ${maior}`);
//mostra a posicao da maior idade encontrada
console.log(`A posicao da maior idade se encontra na ${posicaomaioridade}`);