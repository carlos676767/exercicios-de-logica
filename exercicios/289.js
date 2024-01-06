const informacoes = () => {
  while (true) {
    const n1 = parseInt(prompt(`Digite um valor`));
    const n2 = parseInt(prompt(`Digite um novo valor`));

    if (n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10) {
      const media = (n1 + n2) / 2;
      alert(`A media e ${media}`);
    }

    const continuar = confirm(`Deseja continuar?`);
    if (!continuar) {
      break;
    }
  }
};
informacoes()