function salarioDados() {
  let salario = parseInt(prompt(`Qual o seu salário?`));

  let descontoIr = 0.11 * salario;

  let descontoInss = 0.08 * salario;

  let descontoSindicato = 0.05 * salario;

  let salarioLiquido =
    salario - (descontoIr + descontoInss + descontoSindicato);

  alert(`Com descontos, você receberá ${salarioLiquido}`);
}
salarioDados();
