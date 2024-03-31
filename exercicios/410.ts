
// Você foi contratado para criar um programa que simule um sistema de 
// atendimento em uma agência bancária. O programa deve permitir que os 
// clientes entrem na fila para realizar suas transações bancárias, que podem 
// incluir depósitos, saques e consultas de saldo. O programa também deve ser 
// capaz de exibir informações sobre o próximo cliente a ser atendido.

// Permitir que os clientes entrem na fila para realizar suas transações bancárias 
// (depósitos, saques e consultas de saldo).
// Exibir informações sobre o próximo cliente a ser atendido.
// Simular a chegada de clientes à fila e o atendimento deles.

const filaClientes: number[] = [];
const chegadaClientes = () => {
  setInterval(() => {
    const gerarValor = Math.floor(Math.random() * 50);
    if (!filaClientes.includes(gerarValor)) {
      filaClientes.push(gerarValor);
    }
    console.log("Chegada pessoas no banco, senhas:", filaClientes);
  }, 5000);
};

let depositivo: number = 0;
let saques: number = 0;
let consultasSaldos: number = 0;

const obterOperacoes = () => {
    const operacoes: string[] = ["saque", "deposito", "consultas"];
    const gerarOperacoes = Math.floor(Math.random() * operacoes.length);
    const pegarOperacao = operacoes[gerarOperacoes];
    return pegarOperacao
}


const operacoesClientes = () => {
  setInterval(() => {
    switch (obterOperacoes()) {
      case "saque":
        ++saques;
        break;
      case "deposito":
        ++depositivo;
        break;
      case "consultas":
        ++consultasSaldos;
      default:
        break;
    }
    console.log(
      `total de saques: ${saques} total de depositos: ${depositivo} total de consultas de saldo: ${consultasSaldos}`
    );
  }, 10000);
};

const removerClientesAtendidos = () => {
  setInterval(() => {
    const removerUltimoDaFila = filaClientes.pop();
    console.log(`A senha: ${removerUltimoDaFila} foi atendido, obrigado.`);
  }, 10000);
};

chegadaClientes();
removerClientesAtendidos();
operacoesClientes();