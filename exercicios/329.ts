
/*Exercício: Soma dos Pares**
Escreva um programa que calcule a soma dos números pares de 1 a 100 e exiba o resultado.
Dica: Você pode usar um loop para percorrer os números de 1 a 100, 
verificar se cada número é par e, em caso afirmativo, adicioná-lo à soma.
Se precisar de alguma dica ou solução, estou aqui para ajudar!*/
let somar: number = 0
for(let i = 0; i <= 100; ++i){
    if(i %2 == 0){
        somar+= i
    }
}

console.log(somar)