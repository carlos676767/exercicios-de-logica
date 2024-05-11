const calcularAreaQuadrado = (): void => {
  const lado = Number(prompt("Digite o lado"));
  const area: number = Math.pow(lado, 2);

  alert(area);
};

calcularAreaQuadrado();
