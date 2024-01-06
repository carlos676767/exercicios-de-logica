const mercadorias = () => {
  const totalMercadorias = parseInt(prompt(`Total mercadorias`));
  const totalValor = parseInt(prompt(`Digite o valor total das mercadorias`));
  const media = (totalMercadorias + totalValor) / 2;
  alert(`A media e de ${media}`);
};

mercadorias();
