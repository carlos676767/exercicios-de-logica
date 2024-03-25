
const codigoPecas = {
  camisa: 12,
  blusa: 7,
};

const separarValores = []
const valoresDigitados = (valor) => {
    separarValores.push(valor)
    console.log(separarValores);
}

const funcaoArmezenarValorDigitados = (valor) => {
    const armazenarDadosPecas = [];
    armazenarDadosPecas.push(valor)
}

let informacoesProdutos;
const { camisa, blusa} = codigoPecas;
const manipularValores = () => {
    for (let j = 0; j < 6; j++) {
        informacoesProdutos = Number(prompt(`Por favor, forneça as informações necessárias no seguinte formato:
        - O índice 0 e 1 corresponde ao ID do produto.
        - O índice 2 e 3 correspondem ao número de peças.
        - O índice 4 e 5 correspondem ao valor de cada peça.
      
        Por exemplo: [ID do Produto, ID do Produto, Número de Peças, Número de Peças, Valor da Peça, Valor da Peça]
        
        Por favor, forneça os dados de acordo com este formato para continuar. 
        Camisa: ID 12, Blusa: ID 7
        `));
      
        valoresDigitados(informacoesProdutos)
        switch (informacoesProdutos) {
          case camisa:
              funcaoArmezenarValorDigitados("camisa")
            break;
          case blusa:
          funcaoArmezenarValorDigitados("blusa")
        }
      }
      
}

// o indice 0 e 1 e sempre o do id do produto[X]
// o indice 2 e 3 e numero de pecas
// o indice 4 e 5 valor de cada peca

function somarProdutos() {
  const calcularPeca1 = separarValores[2] * separarValores[4];
  const calcularPeca2 = separarValores[3] * separarValores[5];
  const somarProdutosApagar = calcularPeca1 + calcularPeca2;
  alert(`Voce tera que pagar um valor de $  ${somarProdutosApagar.toFixed(2)} comprando camisa e blusa`);
}

manipularValores();
somarProdutos();