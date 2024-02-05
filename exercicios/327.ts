/*Problema: Verificando Palíndromos

Um palíndromo é uma palavra, frase, número ou qualquer sequência
de caracteres que permanece a mesma quando lida de trás para frente.
Escreva uma função que verifica se uma string é um palíndromo.

Exemplo:

A palavra "radar" é um palíndromo.
A frase "A man, a plan, a canal, Panama!" é um palíndromo*/

const palavra: string = `radar`
const palalindromo = palavra.split(``).reverse().join(``)


if(palavra === palalindromo){
  console.log(`A frase e um palindromo`)
}else{
  console.log(`nao e`)
}
