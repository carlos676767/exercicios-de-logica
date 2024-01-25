const contarVogais = () => {
  let contador = 0;
  const vogais = [`a`, `e`, `i`, `o`, `u`];
  let nome = `carlos`;
  for (const i in vogais) {
    if (nome.includes(vogais[i])) {
        ++contador;
      }
  }
  console.log(contador);
};
contarVogais();
