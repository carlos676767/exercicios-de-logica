const estaticas = () => {
  const carrosVendidos = parseInt(prompt(`Digite o numero de carros vendidos`));
  const totalVendas = parseInt(prompt(`Digite o total de vendas`));
  const salarioFixo = parseInt(prompt(`Digite seu salario fixo`));
  const saberValorDecarroVendido = parseInt(
    prompt(`Digite o valor por cada carro vendido`)
  );

  const comissaoTotalVendas = totalVendas * 0.5;
  const salarioBruto =
    salarioFixo +
    comissaoTotalVendas +
    carrosVendidos * saberValorDecarroVendido;

  alert(
    `Seu salario bruto e ${salarioFixo} e com as vendas deste mes ficara ${salarioBruto}`
  );
};
estaticas()