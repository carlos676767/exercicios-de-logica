let digitequantas = parseInt(prompt("Digite um número de pessoas"));

if (digitequantas < 0 || isNaN(digitequantas)) {
  alert("A entrada é inválida. Por favor, digite um número positivo.");
}

let altura = [];
let pessoas = [];

let homens = 0;
let contarmulher = 0;

for (let i = 0; i < digitequantas; ++i) {
  let alturapessoa = Number(prompt("Digite altura da pessoa"));
  let digitegenero = prompt("Digite o gênero (m/f)");
  pessoas.push(digitegenero);
  altura.push(alturapessoa);

  if (digitegenero === "m") {
    ++homens;
  } else if (digitegenero === "f") {
    ++contarmulher;
  }
}



let maior = altura[0];
let menor = altura[0];
let somarAlturaMulheres = 0;

function encontre() {
  for (let j = 0; j < altura.length; ++j) {
    if (altura[j] > maior) {
      maior = altura[j];
    }
    if (altura[j] < menor) {
      menor = altura[j];
    }
    if (pessoas[j] === "f") {
      somarAlturaMulheres += altura[j];
    }
  }
  return { maior, menor };
}

let resultado = encontre();
console.log(`A menor altura é ${resultado.maior}`);
console.log(`A maior altura é ${resultado.menor}`);
console.log(`O número de homens é ${homens}`);
console.log(`O número de mulheres é ${contarmulher}`);
console.log(`A média da altura das mulheres é ${somarAlturaMulheres / contarmulher}`);