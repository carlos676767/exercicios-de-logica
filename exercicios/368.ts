/*Exercício: Simulação de Fila de Tarefas**

Vamos simular uma fila de tarefas utilizando os conceitos de pilhas, arrays, condicionais, filas, loops, funções, escopo, closures e funções assíncronas (com `setInterval` e `setTimeout`).

Suponha que você tenha uma fila de tarefas a serem executadas, onde cada tarefa tem um tempo estimado para execução. Implemente uma função que simule a execução dessas tarefas.

Lembre-se de considerar o escopo das variáveis e utilizar closures se necessário para manter o estado da fila de tarefas.

Esse exercício vai te ajudar a praticar:

- Uso de arrays para representar uma fila de tarefas.
- Utilização de condicionais para controlar o fluxo de execução.
- Uso de loops para iterar sobre os elementos da fila.
- Implementação de funções para encapsular a lógica de execução das tarefas.
- Uso de funções assíncronas (com `setTimeout`) para simular o tempo de execução das tarefas.
- Manipulação de escopo e closures para manter o estado da fila de tarefas.*/

//escopo global
type executarTarefa = {
  executarTarefa: number;
  executarTarefa2: number;
};

const executarTarefa: executarTarefa = {
  executarTarefa: 3000,
  executarTarefa2: 5000,
};

const executarTarefaFuncao = (paran: number, funcao: () => void) => {
  setTimeout(() => {
    funcao();
  }, paran);
};

const comprarBanana = () => {
  const compras: string[] = ["banana", "uva", "morango", "laranja"];
  for (let i = 0; i < compras.length; i++) {
    if (compras[i].includes("banana")) {
      const finalizarCompras = compras.splice(i, 1);
      console.log("O item selecionado foi comprado", finalizarCompras);
      break;
    } else {
      console.log("O item nao se encontra no mercado");
    }
  }
};

const comprarBananVerdura = () => {
  const lista: string[] = ["pera", "laramja", "morango", "tomate"];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].includes("tomate")) {
      const finalizarCompras = lista.splice(i, 1);
      console.log("O item selecionado foi comprado", finalizarCompras);
      break;
    } else {
      console.log("O item nao se encontra no mercado");
    }
  } 
};

executarTarefaFuncao(executarTarefa.executarTarefa, comprarBanana);
executarTarefaFuncao(executarTarefa.executarTarefa2, comprarBananVerdura);
