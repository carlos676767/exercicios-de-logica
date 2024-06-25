// Dado um array não vazio de inteiros,
// retorne o resultado da multiplicação de
// todos valores juntos em ordem. Exemplo:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let somar = 0;
  for (let i = 0; i < x.length; i++) {
    somar *= x[i];
  }
  return somar;
}

