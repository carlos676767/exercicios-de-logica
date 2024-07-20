function sumVetorBiMensional() {
  const vetor = [
    [1, 2, 3],
    [1, 2, 3],
  ];
  const myVetor = [];
  for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor[i].length; j++) {
      myVetor.push(vetor[i][j] + vetor[i][j]);
    }
  }

  console.log(myVetor);
}

sumVetorBiMensional();
