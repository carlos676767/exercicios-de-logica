// Como parte deste Kata, você precisa criar uma função que,
//  quando fornecida com um trio, retorne o índice do elemento
//  numérico que está entre os outros dois elementos.

// A entrada para a função será um array de três números distintos (Haskell: uma tupla).

// Por exemplo:

// me dê([2, 3, 1]) => 0
// 2 é o número que cabe entre 1 e 3 e o índice de 2 na matriz de entr 0.

// Outro exemplo (só para ter certeza de que está claro):

// me dê([5, 10, 14]) => 1
// 10 é o número que cabe entre 5 e 14 e o índice de 10 na matriz de entrada é 1.

function gimme(triplet) {
  const ordenarArray = [...triplet].sort((a, b) => a - b);
  const removedNumeros = [ordenarArray.pop(), ordenarArray.shift()];
  const values = Number(ordenarArray)
  return triplet.indexOf(values)
}
console.log(gimme([2, 3, 1]));
