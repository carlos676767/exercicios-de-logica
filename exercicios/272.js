let array = [];
const informacoes = () => {
  for (let i = 0; i < 10; i++) {
    let idade = parseInt(prompt(`Digite sua idade`));
    array.push(idade);
  }
};

informacoes();

const mediaGrupo = () => {
  let somar = 0;
  for (let i = 0; i < array.length; i++) {
    somar += array[i];
  }
  let media = somar / array.length;

  console.log(`A media do grupo e ${media}`);
};

mediaGrupo();

const pessoasMaiorIdade = () => {
  let maiorIdade = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 18) {
      ++maiorIdade;
    }
  }

  console.log(`Exatamente ${maiorIdade} tem mais de 18 anos`);
};

pessoasMaiorIdade();

const pessoasIdade5 = () => {
  let menoridade = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 5) {
      ++menoridade;
    }
  }
  console.log(`Exatamente ${menoridade} tem mais menos de 5 anos`);
};

pessoasIdade5();

const maiorNumero = () => {
  let maior = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  console.log(`O maior numero e ${maior}`);
};

maiorNumero();
