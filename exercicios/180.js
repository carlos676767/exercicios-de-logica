/*Crie uma lógica que preencha um vetor de 20 posições com números
aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
números gerados e depois coloque o vetor em ordem crescente, mostrando no final
os valores ordenados.*/
let array = [];
let numeros = [];

function gerarNumeros() {
    for (let index = 0; index < 10; index++) {
        let numero = Math.floor(Math.random() * 99);
        if (!array.includes(numero)) {
            array.push(numero);
            numeros.push(numero);
        }
    }
}

gerarNumeros();

function ordenar(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log("Array gerado:", array);
console.log("Array ordenado:", ordenar(array));
