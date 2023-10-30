


// Encontre a Média de uma Lista de Números

//1. **Escolha uma Lista de Números:** Comece escolhendo uma lista de números. Por exemplo, você pode usar os seguintes números: `[10, 20, 30, 40, 50]`.

//2. **Some os Números:** Some todos os números na lista. Para o exemplo dado, some: 10 + 20 + 30 + 40 + 50 = 150.

//3. **Conte os Números na Lista:** Conte quantos números há na lista. No exemplo, temos 5 números na lista.

//4. **Calcule a Média:** Para encontrar a média, divida a soma dos números (150) pelo número total de números na lista (5). Portanto, 150 ÷ 5 = 30.

//5. **Resultado:** O resultado, neste caso, é 30. Isso significa que a média dos números na lista `[10, 20, 30, 40, 50]` é 30.

//6. **Exiba a Média:** Para mostrar a média no console (ou seja, na tela do seu computador), você pode usar uma mensagem informativa, como: "A média dos números é 30."
//mente, você adiciona todos os números e depois divide pela quantidade de números para obter a média.




let lista = [10, 20, 30, 40, 50] //cria uma array lista

function calcularMedia() {  //cria uma funcao media
    let soma = 0 //cria uma variavel soma que recebe zero
    for(let i = 0; i < lista.length; ++i){ //percorre toda lista
        soma+=lista[i] //adiciona minha lista a soma
    }
    let media = soma/lista.length //divide a soma pela lista
    return media //retorna a media
}

let resultado = calcularMedia() //cria uma var que recebe a funcao
console.log(`a media de numeros e ${resultado}`); //exibe o resuultado