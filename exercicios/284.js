const valores = () => {
  while (true) {
    const n1 = parseInt(prompt(`Digite um valor`));
    const n2 = parseInt(prompt(`Digite outro valor`));
    const parar = prompt(`deseja parar? [S] , [N]`);

    if (parar === `s`) {
      break;
    }
    if (n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10) {
      const media = (n1 + n2) / 2;
      console.log(media);
    } else {
      alert(`Valores nao suportados`);
    }
  }
};

valores();
