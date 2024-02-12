/*Troco: Escreva um programa que, dado um valor em reais e o valor de uma compra,
 calcula o troco utilizando o menor número possível de cédulas e moedas*/

const calcularTroco = () => {
  let valorEmReais = Number(prompt(`Digite o valor em reias`));
  let valorDacompra = Number(prompt(`Digite o valor da compra`));
  const cedulas = [10, 20, 50, 5];
  const moedas = [0.05, 0.5, 0.1, 0.25];

  let menorNumeroCedulas = cedulas[0];
  let menorMoedas = moedas[0];
  const troco = valorDacompra + valorEmReais;

  if (cedulas.length === moedas.length) {
    for (let j = 0; j < cedulas.length; j++) {
      if (menorNumeroCedulas < cedulas[j] && menorMoedas < moedas[j]) {
        menorNumeroCedulas = cedulas[j];
        menorMoedas = moedas[j];
      }
    }
  }
  const menorTrocoEmCedulas = troco - menorNumeroCedulas;
  const total = menorMoedas - menorTrocoEmCedulas;
  console.log(total);
};

calcularTroco();
