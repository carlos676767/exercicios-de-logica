const comprarMacas = () => {
  const tabelaMacas = {
    meiaDuzia: 6,
    duzia: 12,
  };

  const tabelaValoresDuzias = {
    valorMeiaDuzia: 1.3,
    valorDuzia: 1.0,
  };

  const compras = parseInt(prompt(`Deseja comprar quantas macas ?`));
  if (compras <= tabelaMacas.meiaDuzia) {
    const somarValorCompra = compras * tabelaValoresDuzias.valorMeiaDuzia;
    console.log(`Como voce comprou ${compras} pagara ${somarValorCompra.toFixed(2)}`);
  } else if (compras >= tabelaMacas.duzia) {
    const somarValorCompra = compras * tabelaValoresDuzias.valorDuzia;
    console.log(`Como voce comprou ${compras} pagara ${somarValorCompra.toFixed(2)}`);
  } else {
    console.log(`digite um valor entre meia duzia ou uma duzia.`);
  }
};

comprarMacas()