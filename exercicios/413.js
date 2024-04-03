function findUniq(arr) {
  let receberValor = 0;
  const contarObjetos = {};
  for (let i = 0; i < arr.length; ++i) {
    if (!contarObjetos[arr[i]]) {
      contarObjetos[arr[i]] = 1;
    } else {
      ++contarObjetos[arr[i]];
    }
  }
  for (const j in contarObjetos) {
    if (contarObjetos[j] === 1) {
      receberValor = [j];
    }
  }
  return Number(receberValor);
}

console.log(findUniq([0, 0, 0.55, 0, 0, 0.55, 400]));
