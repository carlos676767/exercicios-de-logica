//dada uma array  [2, 4, 6, 4, 2] encontre o valor unico

const encontrarUnico = () => {
  const numeros: number[] = [2, 4, 6, 4, 2];
  const novoConjunto = new Set();
  for (const j of numeros) {
    if (novoConjunto.has(j)) {
      novoConjunto.delete(j);
    } else {
      novoConjunto.add(j);
    }
  }
  console.log(novoConjunto);
};

encontrarUnico();
