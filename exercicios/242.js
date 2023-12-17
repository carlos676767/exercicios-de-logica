const numeros = () => {
  let x = parseInt(prompt(`Digite um numero x`));
  let z = parseInt(prompt(`Digite o valor de z`));
  let contador = 0;
  while (z < x) {
    z = parseInt(prompt(`Digite um novo valor de z`));
    ++contador;
  }
};

numeros()