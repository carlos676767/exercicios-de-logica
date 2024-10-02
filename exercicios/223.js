//Intermediário 5 –    Faça um 
//programa que leia três valores 
//(A, B, C) 
//e mostre-os
//na ordem lida.  Em seguida, 
//mostre-os em ordem 
//crescente e 
//decrescente


//cria uma variavel global que ira pedir tres numeros
let numeros
//cria o vetor que vai receber os numeros.
let vetor = []
//cria uma array que faz uma copia da minha original para ordernar
let copiaArrayOrdemCrescente  = []
//cria uma array que vai copiar array da ordem cresnte
let copiaArrayOrdemDecrescente = []
//faz um loop de tres voltas
function lerValores() {
    for (let i = 1; i <= 3; i++) {
        //pede tres valores inteiros.
        numeros = parseInt(prompt(`Digite um valor`)) 
        //puxa os valores
        vetor.push(numeros)
        //faz uma copia do array
        copiaArrayOrdemCrescente = [...vetor]
        //faz uma copia do meu array
        copiaArrayOrdemDecrescente = [...copiaArrayOrdemCrescente]
    
    }
}

lerValores()

//exibe o array na ordem digitada
console.log(`A array na ordem digitada e ${vetor}`);

//cria uma funcao que orderna a array em ordem crescente
function ordermCresnte(array) {
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

//exibe a copia da array em ordem crescente
console.log(`a array ordenada em ordem crescente e ${ordermcresnte(copiaArrayOrdemCrescente)}`);

//cria uma funcao que ordena em ordem descrente
function narArrayOrdemDescrente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
           if (array[i] > array[j]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
           }
            
        }
    }
    return array
}
//exibe em ordem descrente o array
console.log(`o array em ordem descrente e ${OrdernarArrayOrdemDescrente(copiaArrayOrdemDecrescente)}`);
