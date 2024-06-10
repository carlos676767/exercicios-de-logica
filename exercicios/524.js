// roblema
// Você está desenvolvendo um sistema para uma biblioteca que
// organiza livros. A biblioteca possui uma pilha de livros a serem
//  catalogados e uma fila de clientes esperando para pegar livros emprestados.
//  A tarefa é implementar um sistema que realiza as seguintes operações:

// Adicionar um livro à pilha de livros.
// Remover um livro da pilha de livros para catalogação.
// Adicionar um cliente à fila de espera.
// Remover um cliente da fila de espera para pegar um livro.

const livros = [];
function adicionarLivros() {
  //pilha: o ultimo elemento a entrar e o  primeiro a sair
  setInterval(() => {
    const gerarLivros = Math.floor(Math.random() * 1000);
    livros.push(gerarLivros);
    console.error(`o livro`, livros, `foi adicionado`);
  }, 5000);
}

function removerLivro() {
  setInterval(() => {
    const removerLivro = livros.pop();
    console.log(`o livro ${removerLivro} foi removido`);
  }, 8000);
}

const chegadaPessoas = [];
const chegadaClientes = () => {
  // fila: o primeiro a chegar e o primeiro a sair
  const pessoas = {
    0: "carlos",
    1: "vinicius",
    2: "ana",
    3: "gabi",
    4: "silva",
    5: "raissa",
    6: "joao pedro",
    7: "bibi",
    8: "douglas",
    9: "igor",
    10: "bia",
    11: "bianca",
  };
  setInterval(() => {
    const randomPessoas = Math.floor(Math.random() * 11);
    const buscarPessoa = pessoas[randomPessoas];
    chegadaPessoas.unshift(buscarPessoa);
    console.log("Nome de clientes na fila", chegadaPessoas);
  }, 5000);
};

const removerClientesFila = (callback) => {
  setInterval(() => {
    const removerPessoaPilha = chegadaPessoas.shift();
    callback(removerPessoaPilha);
  }, 8000);
};

adicionarLivros();
removerLivro();
chegadaClientes();
removerClientesFila((callback) => {
  console.log(`Nome pessoa atendida:`, callback);
});
