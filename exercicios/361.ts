const encontarElementoUnico = () => {
  const list: number[] = [3, 3, 2, 3];
  const receberNumeros: number[] = [];
  for (let i = 0; i < list.length; i++) {
    if (!receberNumeros.includes(list[i])) {
      receberNumeros.push(list[i]);
    }
  }

  const removerUltimoElemento = receberNumeros.pop();
  console.log(removerUltimoElemento);
};
encontarElementoUnico();
