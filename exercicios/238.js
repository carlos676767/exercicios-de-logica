function informacoes() {
  let vetor = [];
  let armazenarIdades = [];
  let armazenarMulheres = [];

  while (true) {
    let salario = parseInt(prompt(`Digite seu salario`));
    let idades = parseInt(prompt(`Digite sua idade`));
    let sexo = prompt(`Digite seu sexo M/H`);
    let parar = prompt(`Deseja parar? S/N`);
    vetor.push(salario);
    armazenarIdades.push(idades);

    if (parar === "s") {
      break;
    }

    if (sexo === `m`) {
      armazenarMulheres.push(sexo);
    }
  }

  return {
    vetor,
    armazenarIdades,
    armazenarMulheres,
  };
}

let resultado = informacoes();

function media() {
  let somar = 0;
  for (let i = 0; i < resultado.vetor.length; i++) {
    somar += resultado.vetor[i];
  }
  let media = somar / resultado.vetor.length;
  console.log(`A media dos salarios e ${media}`);
  return media;
}

media();

function maiorEmenorIdade() {
  let menor = resultado.armazenarIdades[0];
  let maior = resultado.armazenarIdades[0];
  for (let i = 0; i < resultado.armazenarIdades.length; i++) {
    if (resultado.armazenarIdades[i] < menor) {
      menor = resultado.armazenarIdades[i];
    } else if (resultado.armazenarIdades[i] > maior) {
      maior = resultado.armazenarIdades[i];
    }
  }

  console.log(`A menor idade e ${menor}`);
  console.log(`A maior Idade e ${maior}`);
  return { menor, maior };
}

maiorEmenorIdade();

function estaticasMulheres() {
  let contar = 0;
  for (let i = 0; i < resultado.vetor.length; i++) {
    if (resultado.vetor[i] <= 200 && resultado.armazenarMulheres.length) {
      ++contar;
    }
  }
  console.log(`O numero de mulheres que recebem ate 200 sao de ${contar}`);
  return contar;
}

estaticasMulheres();
