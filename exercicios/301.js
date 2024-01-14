const converterTempo = (c) => {
  while (true) {
    let c = parseInt(prompt(`digite a temperatura em C`));
    let f = (c * 9) / 5 + 32;
    alert(`A conversao de c para f e de ${f}`);
    if (!confirm(`Deseja continuar?`)) {
      break;
    }
  }
};

converterTempo();
