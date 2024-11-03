const numeroAlto = (valor) => {
  const order = valor.sort((acc, ac) => acc - ac);
  return order[order.length - 1];
};
