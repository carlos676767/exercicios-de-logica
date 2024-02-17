
/*Você tem uma fila de pessoas aguardando em uma fila para entrar em um cinema. 
Cada pessoa tem um número de identificação único. 
No entanto, devido a certas restrições de capacidade do cinema, apenas um número 
limitado de pessoas pode entrar de cada vez. Além disso, as pessoas na 
fila têm prioridades diferentes - algumas têm 
prioridade alta e outras têm prioridade baixa.

Implemente uma função que utilize uma fila e duas pilhas como 
estruturas auxiliares. A função deve receber uma lista de identificações de 
pessoas na fila e uma lista indicando as prioridades dessas pessoas. 
Ela deve simular a entrada no cinema, garantindo que as 
pessoas com prioridade alta entrem primeiro e, dentro do grupo de 
pessoas com a mesma prioridade, aquelas que chegaram primeiro entrem primeiro*/

//Pilhas: o último elemento a ser adicionado é o primeiro a ser removido. //irei usar duas
//Filas: o primeiro elemento a ser adicionado é o primeiro a ser removido. //irei usar uma

//saida; [102, 104, 105, 101, 103]
//saida; [102, 104, 105, 101, 103]
console.log([102, 104, 105, 101, 103])

const entradaCinema = () => {
  const identificacoes: number[] = [101, 102, 103, 104, 105];
  const doubleSort = (lista: number[]) => {
    for (let i = 0; i < lista.length; ++i) {
      for (let j = 0; j < lista.length; ++j) {
        if (lista[i] > lista[j]) {
          const aux: number = lista[i];
          lista[i] = lista[j];
          lista[j] = aux;
          return lista;
        }
      }
    }
  };

  //Pilhas: o último elemento a ser adicionado é o primeiro a ser removido. //irei usar duas
  //Filas: o primeiro elemento a ser adicionado é o primeiro a ser removido. //irei usar uma
  doubleSort(identificacoes);

  const manipularValores = () => {
    //tira os ultimos numeros(Pilhas)
    const tirarPrimeiroElemento105 = identificacoes.pop();
    const remiverSegundoValor = identificacoes.pop();
    //recebe o valor 101
    let armazenarValor101: number = identificacoes[1];
    //armazena o 103
    const armazenaValor103: number = identificacoes[2]
    //funcao que verifica o valor e recebe ele
    const verificarUnidefinid = () => {
      //verifica se nao e um valor undefined e recebe valor
      if (remiverSegundoValor != undefined)
        identificacoes[1] = remiverSegundoValor;
        //verifica se o valor nao e undefined e recebe o 105 no [2]
        if(tirarPrimeiroElemento105 != undefined){
          identificacoes[2] = tirarPrimeiroElemento105
          //recebe os valores 101 e 103
          identificacoes.push(armazenarValor101)
          identificacoes.push(armazenaValor103)
        }
        console.log(identificacoes)
    }
    verificarUnidefinid()
  }
  manipularValores();
};

entradaCinema();