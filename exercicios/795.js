function findEvenIndex(arr) {
  let sumEsquerda = 0;
  let sumDireita = 0;
  const filterNegative = arr.filter(data => data > 0)
  const vetorCortadoEsquerda = filterNegative.length - 1;
  const valueDivididoporDois = vetorCortadoEsquerda / 2;

  for (let i = 0; i < valueDivididoporDois; i++) {
    sumEsquerda += filterNegative[i]
  }

  for (let i = valueDivididoporDois + 1; i < filterNegative.length; i++) {
    sumDireita += filterNegative[i]
  }
  const divideSumValueESquerda = sumDireita - valueDivididoporDois
  const divideSuValueDireita = sumEsquerda - valueDivididoporDois
  return divideSuValueDireita == divideSumValueESquerda ? divideSuValueDireita : -1
}

console.log(findEvenIndex([1,100,50,-51,1,1]));