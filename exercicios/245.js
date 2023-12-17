const tabelaAcao = () => {
  const tabela = {
    m: 10,
    a: 20,
    y: 100,
  };
  console.table(tabela);
};

tabelaAcao();

let array = []
console.log(array);

const bolsaDevalores = () => {
 let lucro2, lucro1, lucro
  while (true) {
    let acao = prompt(`Qual o tipo da acao?`);
    if (acao === `f`) {
      break;
    }

    switch (acao) {
      case `m`:
        let valorDacompra = parseInt(
          prompt(`cada acao custa 10 reais, vai querer quantas?`)
        );
        let venda = parseInt(prompt(`quer vender acao por quanto?`));
         lucro = venda - valorDacompra;
       
        alert(`O lucro da acao  M e de ${lucro}`);
        break;
      case `a`:
        let valorDacompra1 = parseInt(
          prompt(`cada acao custa 20 reais, vai querer quantas?`)
        );
        let venda1 = parseInt(prompt(`quer vender acao por quanto?`));
         lucro1 = venda1 - valorDacompra1;
        alert(`O lucro da acao A e de ${lucro1}`);

        break;
      case `y`:
        let valorDacompra2 = parseInt(
          prompt(`cada acao custa 100 reais, vai querer quantas?`)
        );
        let venda2 = parseInt(prompt(`quer vender acao por quanto?`));
         lucro2 = venda2 - valorDacompra2;
        alert(`O lucro da acao Y e de ${lucro2}`);
        break;
      default:
        alert(`Digite uma acao valida`);
        break;
    }
  }
  array.push(lucro, lucro1, lucro2)
};

bolsaDevalores();

function acoesAcimaDe1000EmenosQue200() {
let lucroAcimaDe1000 = 0
let lucroAbaixoDe200 = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 1000) {
        ++lucroAcimaDe1000
    }
    if (array[i] < 200) {
        ++lucroAbaixoDe200
    }
  }
  alert(`As acoes que sao menores que 200 sao de ${lucroAbaixoDe200}`)
  alert(`As acoes que sao menores que 200 sao de ${lucroAcimaDe1000}`)
}

acoesAcimaDe1000EmenosQue200()