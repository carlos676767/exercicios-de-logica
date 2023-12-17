function escola() {
  let nota1 = 0;
  let nota2 = 0;
  let nota3 = 0;
  let notafinal = 0;
  let vetor = [];
  let aulasFrenquedas = 0;
  let reprovados = 0;

  for (let i = 0; i < 2; i++) {
    let matricula = parseInt(prompt(`Digite o numero da matricula`));
    aulasFrenquedas = parseInt(prompt(`Quantas vezes voce vai na aula?`));
    nota1 = parseInt(prompt(`Digite sua primeira nota`));
    nota2 = parseInt(prompt(`Digite sua segunda nota`));
    nota3 = parseInt(prompt(`Digite sua terceira nota`));
    vetor.push(nota1, nota2, nota3);

    notafinal = (nota1 + nota2 + nota3)/3

    if (notafinal >= 8) {
      alert(
        `Parabens voce foi aprovado com a nota de ${notafinal} a sua matricula e ${matricula}`
      );
    } else {
      ++reprovados;
      alert(
        `Parabens voce foi reprovado com a nota de ${notafinal} a sua matricula e ${matricula}`
      );
    }
  }

  let maiorN = vetor[0];
  let menorN = vetor[0];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maiorN) {
      maiorN = vetor[i];
    } else if (vetor[i] < menorN) {
      menorN = vetor[i];
    }
  }

  let porcentagem = (reprovados / aulasFrenquedas) * 100;

  alert(`A maior nota foi ${maiorN}`);
  alert(`O menor numero e o ${menorN}`);
  alert(`O total de alunos reprovados e ${reprovados}`);

  return {
    notafinal,
    maiorN,
    menorN,
    reprovados,
    porcentagem
  };
}

escola();
