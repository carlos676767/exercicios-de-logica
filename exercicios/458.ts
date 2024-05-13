function calcularVetor() {
  const a: number[] = [10, 2, 25, 10, 5, 31, 5];
  const b: number[] = [12, 2, 25, 14, 21, 12, 25];
  const vetorC: number[] = [];
  if (a.length === b.length) {
    for (let j = 0; j < a.length; j++) {
      vetorC.push(a[j] - b[j]);
    }
  }
  console.log(vetorC);
}

calcularVetor();