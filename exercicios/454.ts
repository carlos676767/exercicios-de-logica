const paresOuImpares = () => {
  const vetor1: number[] = new Array(10);
  const vetor2: number[] = new Array(10);

  const vetorPosicoes: number[] = new Array(20);

  if (vetor1.length === vetor2.length) {
    for (let i = 0; i < vetor1.length; ++i) {
      if (vetor1[i] % 2 === 0) {
        vetorPosicoes.push(i);
      } else if (vetor2[i] % 2 !== 0) {
        vetorPosicoes.push(i);
      }
    }
  }
  console.log(vetorPosicoes);
};

paresOuImpares();
