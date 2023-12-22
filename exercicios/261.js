const pesosIdeias = function () {
  const dadosEntradas = prompt(`Voce e [h] ou [m] ?`);
  switch (dadosEntradas) {
    case `h`:
      const homensAltura = parseFloat(prompt(`Digite sua altura`));
      const formula = 72.7 * homensAltura - 58;
      alert(`Para voce que e homem seu peso ideal e ${formula.toFixed(2)}`);
      break;
    case `m`:
      const mulheresAltura = parseFloat(prompt(`Digite sua altura`));
      const formula2 = 62.1 * mulheresAltura - 44.1;
      alert(`o peso ideal para voce mulher e de ${formula2.toFixed(2)}`);
      break;
    default:
      alert(`Digite um genero correto.`);
      break;
  }
};

pesosIdeias();
