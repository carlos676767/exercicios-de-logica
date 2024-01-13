let arrayNome = [];
let arraySexo = [];
let arrayIdade = [];
const informacoes = () => {
  while (true) {
    let nome = prompt(`Digite seu nome`);
    let idade = parseInt(prompt(`Digite sua idade`));
    let sexo = prompt(`Digite seu sexo, [h] ou [f]`);
    arrayNome.push(nome);
    arrayIdade.push(idade);
    arraySexo.push(sexo);
    if (!confirm(`Deseja continuar?`)) {
      break;
    }
  }
};

informacoes();

const nomePessoaMaisVelha = () => {
  let maior = arrayIdade[0];
  let receberNomePessoaMaisVelha = arrayNome[0];
  if (arrayIdade.length === arrayNome.length) {
    for (let i = 0; i < arrayIdade.length; i++) {
      if (arrayIdade[i] > maior) {
        maior = arrayIdade[i];
        receberNomePessoaMaisVelha = arrayNome[i];
      }
    }
    console.log(`O nome da pessoa mais velha e ${receberNomePessoaMaisVelha}`);
    console.log(`A idade da pessoa mais velha e ${maior}`);
  }
};

nomePessoaMaisVelha();

const nomeMulherMaisJovem = () => {
  let menor = arrayIdade[0];
  let nomeMulherMaisJovem = arraySexo[0];
  if (arraySexo.length === arrayIdade.length) {
    for (let i = 0; i < arraySexo.length; i++) {
      if (arraySexo[i] === "f" && arrayIdade[i] < menor) {
        menor = arrayIdade[i];
        nomeMulherMaisJovem = arrayNome[i];
      }
    }
  }
  console.log(`O nome da mulher mais jovem e ${nomeMulherMaisJovem}`);
};

nomeMulherMaisJovem();

const mediaIdade = () => {
  let somar = 0;
  for (let i = 0; i < arrayIdade.length; i++) {
    somar += arrayIdade[i];
  }
  let media = somar / arrayIdade.length;
  console.log(`a media e de ${media}`);
};

const homensMaisDe30 = () => {
  let contarIdadeHomens30 = 0;
  if (arraySexo.length === arrayIdade.length) {
    for (let i = 0; i < arraySexo.length; i++) {
      if (arraySexo[i] === "h" && arrayIdade[i] >= 30) {
        ++contarIdadeHomens30;
      }
    }
  }
  console.log(
    `exatamente ${contarIdadeHomens30} tem 30 ou mais anos os homens`
  );
};

contarIdadeHomens30();

const idadeMulherMenorDeidade = () => {
  let contarIdadeMulheres = 0;
  if (arraySexo.length === arrayIdade.length) {
    for (let i = 0; i < arraySexo.length; i++) {
      if (arraySexo[i] === "f" && arrayIdade[i] <= 18) {
        ++contarIdadeMulheres;
      }
    }
  }
  console.log(
    `exatamente ${contarIdadeMulheres} tem 30 ou mais anos os homens`
  );
};
idadeMulherMenorDeidade();
