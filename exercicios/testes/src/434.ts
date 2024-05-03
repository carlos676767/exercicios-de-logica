interface EstoqueProduto {
  nome: string;
  codigo: number;
  quantidade: Number;
  preco: number;
}

const adicionarProduto = () => {
  const cadastrarProduto = prompt(`
  Digite o nome do produto\n
  Digite o codigo do produto \n
  Digite a quantidade de produtos\n
  digite o preco do produto\n`);
  
  if (cadastrarProduto != null) {
    const array = cadastrarProduto.split(" ");
    const estoqueProduto: EstoqueProduto = {
      nome: String(array[0]),
      codigo: Number(array[1]),
      quantidade: Number(array[2]),
      preco: Number(array[3])
    };
    console.log(estoqueProduto);
    console.log(cadastrarProduto); 
  }
};

adicionarProduto();
