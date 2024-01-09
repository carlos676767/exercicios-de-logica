let vetor = [];
const vetores = () => {
  for (let i = 0; i <= 20; i++) {
    let numero = parseInt(prompt(`Digite um valor`));
    if (numero > 0) {
      vetor.push(numero);
    }
  }
  console.log(vetor);
};

vetores();

const mexerValores = () => {
  let maior = 0;
  let indice = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i];
      indice = i;
    }
  }
  console.log(`o maior valor e ${maior}`);
  console.log(`o indice do elemento e ${indice}`);
};


mexerValores();
