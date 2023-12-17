function tabela() {
  const tabelaOpiniao = {
    opcao1: "bom",
    opcao2: "regular",
    opcao3: "otimo",
  };

  console.table(tabelaOpiniao);
  return tabelaOpiniao;
}

tabela();

function estaticas() {
  let somar = 0;
  let regular = 0;
  let otimo = 0;
  let vetor = [];
  for (let i = 0; i < 15; i++) {
    let idade = parseInt(prompt(`Digite sua idade`));
    let opiniao = prompt(`Seguindo a tabela diga sua opiniao sobre o filme`);

    if (opiniao === `bom`) {
      vetor.push(opiniao);
    }

    switch (opiniao) {
      case `otimo`:
        ++otimo;
        somar += idade;
        break;

      case `regular`:
        ++regular;
        break;

      default:
        alert(`Digite uma opcao correta`);
        break;
    }
  }

  let porcentagem1 = (vetor.length / regular) * 100;
  let porcentagem2 = (vetor.length / otimo) * 100;

  let media = somar / 15;
  return {
    media,
    contador: regular,
    porcentagem1,
    porcentagem2,
  };
}

const resultado = estaticas();
console.log(
  `A media de idade e das pessoas que digitou otimo ${resultado.media}`
);
console.log(
  `O numero de pessoas que digitou regular foi ${resultado.contador}`
);
console.log(`A % entre bom e regular e de ${resultado.porcentagem1}`);
console.log(`A % entre bom e otimo e de ${resultado.porcentagem2}`);
