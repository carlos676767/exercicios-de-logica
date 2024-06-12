//inicia uma funcao para compras
function valorCompras() {
  //variavel que soma compras a vista
  let somarValoreAvista = 0;
  //soma compras a prazo
  let comprasAprazo = 0;
  //soma a prestacao
  let prestacao = 0;
  //faz um loop
  for (let i = 1; i < 15; i++) {
    //pede para escolher se serar a v ou p
    let fazerCompras = prompt(
      `Para compras a vista use [V] para compras a prazo [P]` );

    //abre um menu de escolhas
    switch (fazerCompras) {
      //caso seleciona [v] acontece algo
      case "v":
        //pede o custo da compra a prazo
        let custoCompraAvista = parseInt(
          prompt(`[AVISTA] Digite o valor de um produto`)
        );
        //soma os valores
        somarValoreAvista += custoCompraAvista;
        break;

      //seleciona [p]
      case "p":
        //pede ao usuario valor da compra [p]
        let custoCompraAprazo = parseInt(
          prompt(`[aprazo] Digite o valor de um produto`)
        );
        //soma o valor da compra aprazo
        comprasAprazo += custoCompraAprazo;
        //divide a prestacao por 3 para obter o valor
        prestacao = +custoCompraAprazo / 3;
        break;
      //caso nao selecionar nem [p] e nem [v] da esse erro
      default:
        alert(`Selecione um valor avista ou a prazo.`);
        break;
    }
  }
  //soma o valor de todas as compras
  let somarCompras = somarValoreAvista + comprasAprazo;
  //retorna os valores
  return {
    somarValoreAvista,
    comprasAprazo,
    somarCompras,
    prestacao,
  };
}

//chama a funcao em uma variavel
let resultadoCompras = valorCompras();
//exibe as informacoes
confirm(`[LOJA DAS VIDEIRAS]\n Relatório do mês de junho \n
[V] ${resultadoCompras.somarValoreAvista} \n[P] ${
  resultadoCompras.comprasAprazo
} \n [Valor total] ${resultadoCompras.somarCompras}\n o valor 
da prestacao sera de ${resultadoCompras.prestacao.toFixed(2)} a prazo`);
