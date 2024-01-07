const lerNumeros = () => {
  let somar = 0;
  for (let i = 0; i <= 10; i++) {
    let valor1 = parseInt(prompt(`Digite um valor`));
    if (valor1 < 40) {
      somar += valor1;
    }
  }
  alert(`O valor dos numeros menor que 40 e de ${somar} `);
};
lerNumeros();
