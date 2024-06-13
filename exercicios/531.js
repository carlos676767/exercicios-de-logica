//- operadores e condicionais

//operador de mais
const somar = 5 + 5;
console.log(somar);
console.log();
//multiplicar
const multiplicar = 5 * 5;
console.log(multiplicar);
//operador de menos
const retirar = 6 - 1;
console.log(retirar);
//ordem de precedencia
const ordemDePrecendia = (5 / 2) * 1;
console.log(ordemDePrecendia);

const idade = 8;
// condicionais
if (idade >= 18) {
  console.log("maior de idade");
} else if (idade >= 1 && idade <= 10) {
  console.log("sou crianca");
} else {
  console.log("adolecente");
}
