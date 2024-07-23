//8 - Faça um algoritmo que leia três valores inteiros 
// diferentes e imprima na tela os valores em ordem decrescente.

const valuesImprime = () => {
    const n1 = parseInt(prompt("digite um n"))
    const n2 = parseInt(prompt("digite outro n "))
    const n3 = parseInt(prompt("Digite outro numero"))
    const arr = [n1, n2, n3]
    alert(arr.sort((a,b) => b - a))

};

valuesImprime()