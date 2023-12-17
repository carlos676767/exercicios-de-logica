while (true) {
  let opcao = parseInt(
    prompt("[1] Novo salário\n[2] Férias\n[3] Décimo terceiro\n[4] Sair")
  );

  if (opcao === 4) {
    break;
  }

  switch (opcao) {
    case 1:
      let salario = parseInt(prompt(`Qual o seu salario?`));
      if (salario <= 350) {
        let novoSalario = salario * 0.15;
        let somar = novoSalario + salario;
        alert(`Seu novo salario sera de ${somar}`);
      } else if (salario >= 350 && salario <= 600) {
        let novoSalario = salario * 0.10;
        let somar = novoSalario + salario;
        alert(`Seu novo salario sera de ${somar}`);
      } else if (salario > 600) {
        let novoSalario = salario * 0.05;
        let somar = novoSalario + salario;
        alert(`Seu novo salario sera de ${somar}`);
      }
      break;

      case 2:
      let seuSalario = parseInt(prompt(`Qual seu salario?`))
      let ferias = (seuSalario / 30 ) * 30
      alert(`O valor das suas ferias sera de ${ferias}`)
      break



      case 3:
        let salarios = parseInt(prompt(`Qual o seu salario?`))
        let meses = parseInt(prompt(`Quantos meses de trabalho voce tem?`))
        let decimo = (meses * salarios) /12
        alert(`Seu decimo sera de ${decimo }`)

    default:
      break;
  }
}
