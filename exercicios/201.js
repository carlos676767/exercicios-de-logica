let nascimento = parseInt(prompt(`Digite seu nascimento`));
let anodeentrada = parseInt(prompt(`Digite o ano de entrada`));

let idade = nascimento - 2023;
let tempotrabalhado = idade - anodeentrada;

if (idade >= 65 || tempotrabalhado >= 30) {
  console.log(`Pode aposentar`);
} else if (idade >= 60 || tempotrabalhado >= 25) {
  console.log(`pode aposentar`);
} else {
  console.log(`nao pode`);
}
