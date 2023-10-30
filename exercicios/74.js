

//Exercício Encontre o Menor Número em uma Lista de Números**

// Crie uma array chamada `numeros` com uma lista de números, por exemplo: `[15, 5, 30, 10, 25, 50]`.

// Escreva uma função chamada `encontrarMenorNumero` que aceita essa array como parâmetro.

//3. Dentro da função, use um loop para percorrer a array e encontrar o menor número na lista.

//4. Inicialize uma variável chamada `menor` com o primeiro número da lista.

//5. À medida que você percorre a array com o loop, compare cada número com o valor atual de `menor`.
// Se o número atual for menor do que o valor atual de `menor`, atualize o valor de `menor` para o número atual.

//6. No final do loop, `menor` conterá o menor número na array.

//7. Retorne `menor` como resultado da função.

//8. Fora da função, chame `encontrarMenorNumero` com a array `numeros` que você definiu e armazene o resultado em uma variável.

//9. Finalmente, imprima o menor número no console com uma mensagem informativa.


function encontrarMenorNumero() { //cria uma funcao para encontrar o numero menor
    let menor = 200 //cria uma varaivel menor que recebe o primeiro numero da lista.
    for(let i = 0; i < array.length; ++i){ //cria um for que percorre toda array
        if (array[i] < menor) { //compara se meu array[i] e menor que menor
            menor = array[i] //se for menor recebe array
        } 
    } return menor //retorna o menor
}

let array = [200,400,500,100,2000,9000] 

let resultado = encontrarMenorNumero() //recebe minha funcao em uma var 
console.log(`o numero menor foi o ${resultado}`); //exibe o resultado.