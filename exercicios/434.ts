interface EstoqueProduto {
  nome: string;
  codigo: number;
  quantidade: Number;
  preco: number;
};

const estoqueProdutos: EstoqueProduto[] = [];
const adicionarProduto = () => {
  const cadastrarProduto = prompt(`
  Digite o nome do produto\n
  Digite o codigo do produto \n
  Digite a quantidade de produtos\n
  Digite o preco do produto\n`);

  if (cadastrarProduto != null) {
      const array = cadastrarProduto.split(" ");
      const estoqueProduto: EstoqueProduto = {
          nome: String(array[0]),
          codigo: Number(array[1]),
          quantidade: Number(array[2]),
          preco: Number(array[3])
      };
      mensagemSucesso(estoqueProduto);
      console.log(estoqueProdutos);
  }

}

const mensagemSucesso = (produto: EstoqueProduto) => {
  if (estoqueProdutos.push(produto)) {
      alert("Produto cadastrado com sucesso!")
  }
}


const loopAdicionarProdutos = (): void => {
  while (true) {
      menuOpcoes()
      if (confirm("deseja encerrar o programa?")) {
          alert("Programa encerrado com sucesso.")
          break;
      };
  };
};


const menuOpcoes = (): void => {
  const opcoes = prompt(`
      Digite [1] para cadastrar produto
      Digite [2] para calcular o estoque total
      Digite [3] para obter o produto mais caro
      Digite [4] para lista todos os produtos
      Digite [5] para listar o produto mais barato`)
  switch (opcoes) {
      case '1':
          adicionarProduto();
          break;
      case "2":
          calcularValorTotalEstoque();
          break
      case '3':
          obterProdutoMaisCaro();
          break
      case "4":
          carregarProdutos();
          break
      case '5':
          // obterProdutoMaisBarato();
          break
      default:
          break;
  }
}


const carregarProdutos = (): void => {
  if (estoqueProdutos.length === 0) {
      mensagemVazio();
  } else {
      listarProdutos();
  }
}


const listarProdutos = (): void => {
  for (let i = 0; i < estoqueProdutos.length; ++i) {
      const mensagem = `
      PRODUTOS CADASTRADOS: 
      Nome:${JSON.stringify(estoqueProdutos[i].nome)};
      codigo: ${JSON.stringify(estoqueProdutos[i].codigo)};
      quantidade: ${JSON.stringify(estoqueProdutos[i].quantidade)};
      preco: ${JSON.stringify(estoqueProdutos[i].preco)}`;
      alert(mensagem);
  }
}


let somar: number = 0;
let calcularEstoque: number;
const calcularValorTotalEstoque = (): void => {
  if (estoqueProdutos.length === 0) {
      mensagemVazio();
  } else {
      for (let j of estoqueProdutos) {
          calcularEstoque = (Number(j.quantidade) * j.preco);
      }
      somar += calcularEstoque;
      alert(`Valor total estoque: ${somar}`);
  }
}



const mensagemVazio = () => {
  return alert("Nenhum produto cadastrado")
}

let maior: number = 0;
let produto: any = null

const obterProdutoMaisCaro = (): void => {
  if (estoqueProdutos.length === 0) {
      mensagemVazio()
  } else {
      listarProdutosMaisCaros()
  }
};

const listarProdutosMaisCaros = ((): void => {
  for (const i of estoqueProdutos) {
      if (i["preco"] > maior) {
          maior = i["preco"];
          produto = i
      }
  }
  alert(`produto mais caro encontrado ${JSON.stringify(produto)}`);
})


let menor: number = 0
let produtoBarato: any = null
const obterProdutoMaisBarato = (): void => {
  if (estoqueProdutos.length === 0) {
      mensagemVazio();
  } else {
      for (const i of estoqueProdutos) {
          if (menor < i["preco"] ) {
              menor = i["preco"];
              produtoBarato = i
          }
      }
      alert(`produto mais barato encontrado ${JSON.stringify(produto)}`);
  }
}

loopAdicionarProdutos();
