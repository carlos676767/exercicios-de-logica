//cria uma funcao que mostra as parcelas dos carros
function tabelaValorCarro() {
  //cria uma objeto[abstracao] que tem os dados de parcelamento
  const dadosParcelamento = [
    { quantidadeParcelas: 6, percentualAcrescimo: 3 },
    { quantidadeParcelas: 12, percentualAcrescimo: 6 },
    { quantidadeParcelas: 18, percentualAcrescimo: 9 },
    { quantidadeParcelas: 24, percentualAcrescimo: 12 },
    { quantidadeParcelas: 30, percentualAcrescimo: 15 },
  ];
  //mostra a tabela
  console.table(dadosParcelamento);
  //retorna o valor da tabela
  return dadosParcelamento;
}

//cria uma funcao para comprar o carro.
function comprarCarro() {
  //chama a funcao
  tabelaValorCarro();

  //pede o valor do carro
  let valorDocarro = parseInt(prompt(`Digite o valor do carro`));

  //pergunta se o valor sera avista
  let valorAvista = prompt(`O valor sera avista? [S] [N]`);

  switch (valorAvista) {
    case "s":
      let descontoAVista = (valorDocarro * 20) / 100;
      let valorPagoAVista = valorDocarro - descontoAVista;
      console.log(
        `O valor original do carro foi de ${valorDocarro}. Com o desconto, ficará por ${valorPagoAVista}`
      );
      break;

    case "n":
      let quantasParcelas = parseInt(
        prompt(`Vai querer em quantas parcelas ? o maximo sao \n 60`)
      );
      switch (quantasParcelas) {
        case 6:
          let valorFinal = valorDocarro + (valorDocarro * 3) / 100;
          const tabelaValorCarro = {
            valorOriginal: valorDocarro,
            quantidadeParcelas: 6,
            percentualAcrescimo: 3,
            valorFinal: valorFinal,
          };
          console.table(tabelaValorCarro);
          break;

        case 12:
          valorFinalCom12Parcelas = valorDocarro + (valorDocarro * 6) / 100;
          const tabelaValorCom12 = {
            quantidadeParcelas: 12,
            percentualAcrescimo: 6,
            valorFinalCom12Parcelas: valorFinalCom12Parcelas,
          };
          console.table(tabelaValorCom12);
          break;

        case 18:
          valorFinalCom18Parcelas = valorDocarro + (valorDocarro * 9) / 100;
          const tabelaComValor18 = {
            quantidadeParcelas: 18,
            percentualAcrescimo: 9,
            valorFinalCom18Parcelas: valorFinalCom18Parcelas,
          };
          console.table(tabelaComValor18);
          break;

        case 24:
          valorFinalCom24Parcelas = valorDocarro + (valorDocarro * 12) / 100;
          const tabelaValorFinal24 = {
            quantidadeParcelas: 24,
            percentualAcrescimo: 12,
            valorFinalCom24Parcelas: valorFinalCom24Parcelas,
          };
          console.table(tabelaValorFinal24);
          break;

        case 30:
          valorFinalCom30Parcelas = valorDocarro + (valorDocarro * 15) / 100;
          const tabelaCom30Parcelas = {
            quantidadeParcelas: 30,
            percentualAcrescimo: 15,
            valorFinalCom30Parcelas: valorFinalCom30Parcelas,
          };
          console.table(tabelaCom30Parcelas);
          break;

        default:
          console.error(`Digite o numero de parcelas entre 6 e 60`);
          break;
      }
      break;

    default:
      console.log(
        "Opção inválida. Por favor, escolha 's' para sim ou 'n' para não."
      );
  }
}
comprarCarro();
