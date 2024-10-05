

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sumEsquerda =  arr.slice(0, i).reduce((acc, ac) => acc + ac, 0);
    const sumDireita =  arr.slice(i + 1).reduce((acc, ac) => acc + ac, 0);

    if (sumDireita == sumEsquerda) {
      return i
    }
  }

  return - 1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))