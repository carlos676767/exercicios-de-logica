const arraySalario = [];
const arrayMediaFilhos = [];

const coletarDadosPrefeutura = () => {
  while (true) {
    const salario = parseInt(prompt(`Digite o seu salario`));
    const numeroFIlhos = parseInt(prompt(`Digite o numero de filhos`));
    arraySalario.push(salario);
    arrayMediaFilhos.push(numeroFIlhos);

    if (salario < 0) {
      break;
    }
  }
};

coletarDadosPrefeutura();

const mediaSalario = () => {
  let somar = 0;
  for (let i = 0; i < arraySalario.length; i++) {
    somar += arraySalario[i];
  }
  const media = somar / arraySalario.length;
  alert(`A media de salario da populacao ${media}`);
};

mediaSalario();
const mediaNumeroFilhos = () => {
  let somar = 0;
  for (const i in arrayMediaFilhos.length) {
    somar += arrayMediaFilhos[i];
  }
  const media = somar / arrayMediaFilhos.length;
  alert(`A media de numero de filhos e ${media}`);
};

mediaNumeroFilhos();

const maiorSalario = () => {
  let maior = 0;
  for (let i = 0; i < arraySalario.length; i++) {
    if (maior > arraySalario[i]) {
      maior = arraySalario[i];
    }
  }
  alert(`O maior salario e ${maior}`);
};

maiorSalario();

const pencentualSalario = () => {
  for (let i = 0; i < arraySalario.length; i++) {
    if (arraySalario[i] < 150) {
      const pecentual = (150 / arraySalario[i]) * 100;
      alert(`O pecentual e de ${pecentual}`);
    }
  }
};
pencentualSalario();