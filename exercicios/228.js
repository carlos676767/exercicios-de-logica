//cria uma funcao com uma tabela das cores dos olhos
function TabelaCorDosOlhos() {
  const corDosOlhos = {
    A: "azul",
    P: "preto",
    V: "verde",
    C: "castanho",
  };
  console.table(corDosOlhos);
  return corDosOlhos;
}

function CorDosCabelos() {
  const corDosCabelos = {
    P: "preto",
    C: "castanho",
    L: "louro",
    R: "ruivo",
  };
  console.table(corDosCabelos);
  return corDosCabelos;
}

CorDosCabelos();
TabelaCorDosOlhos();

let idade = 0;
let peso = 0;
let altura = 0;
let cabelos = 0;
let olhos = 0;
coletarDados();

let somarIdade = 0;
let contarIdadesEpeso = 0;

let olhosAzul = 0;
let olhosPretos = 0;
let olhosVerdes = 0;
let olhosCastanhos = 0;
let armazenarOlhos = [];

let contarCabelosPretos = 0;
let cabelosCastanhos = 0;
let cabelosLouros = 0;
let cabelosRuivos = 0;

function coletarDados() {
  for (let i = 0; i < 3; i++) {
    idade = Number(prompt(`Digite sua idade`));
    peso = Number(prompt(`Digite seu peso`));
    altura = Number(prompt(`Digite sua altura`));
    olhos = prompt(`Digite a cor dos olhos de acordo com a tabela`);
    cabelos = prompt(`Digite a cor do cabelo de acordo com a tabela`);
  }
}

function estaticasIdades() {
  if (idade >= 50 && peso <= 60) {
    ++contarIdadesEpeso;
  }
  return {
    "O numero total de pessoas com a idade entre 50 e peso ate 60 e de":
      contarIdadesEpeso,
  };
}

function mediaIdades() {
  if (altura <= 1.5) {
    somarIdade += idade;
  }

  const media = somarIdade / 3;
  return {
    "a media de idade entre peso 1.50 e": media,
  };
}

function contarOlhos() {
  switch (olhos) {
    case "a":
      ++olhosAzul;
      break;

    case "p":
      ++olhosPretos;
      break;

    case "v":
      ++olhosVerdes;
      break;
    case "c":
      ++olhosCastanhos;
    default:
      alert(`Digite o valor de acordo com a tabela`);
      break;
  }

  armazenarOlhos.push(olhosPretos, olhosVerdes, olhosCastanhos);

  return {
    "O total de pessoas com olhos azul e": olhosAzul,
    "O total de pessoas com olhos preto e": olhosPretos,
    "O total de pessoas com olhos verde e": olhosVerdes,
    "O total de pessoas com olhos castanhos e": olhosCastanhos,
  };
}

function TabelaDosCabelos() {
  switch (cabelos) {
    case "p":
      ++contarCabelosPretos;
      break;
    case "c":
      ++cabelosCastanhos;
      break;
    case "l":
      ++cabelosLouros;
      break;
    case "r":
      ++cabelosRuivos;
      break;
    default:
      alert(`Digite um valor da tabela`);
      break;
  }

  return {
    "O total de pessoas com pretos preto e": contarCabelosPretos,
    "O total de pessoas com pretos castanhos e": cabelosCastanhos,
    "O total de pessoas com louros louros e": cabelosLouros,
    "O total de pessoas com louros ruivos e": cabelosRuivos,
  };
}

function porcentagemDePessoasComOlhosAzul() {
  let porcentagem = (olhosAzul / armazenarOlhos.length) * 100;

  return {
    "A % de pessoas com olhos azuis é": porcentagem,
  };
}

console.table(estaticasIdades());
console.table(mediaIdades());
console.table(contarOlhos());
console.table(TabelaDosCabelos());
console.table(porcentagemDePessoasComOlhosAzul());
