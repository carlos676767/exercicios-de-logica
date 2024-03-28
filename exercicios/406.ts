// // Exercício: Soma de Subconjuntos

// // Dado um array de números inteiros não negativos e um valor alvo, 
// screva um programa para determinar se é possível escolher um conjunto de 
// números no array cuja soma seja igual ao valor alvo.

// // Por exemplo:

// // Array: [2, 4, 6, 8]
// // Valor alvo: 10
// // Resposta: Sim, pois 2 + 8 = 10.
// // Requisitos:

// // O programa deve determinar se é possível encontrar uma combinação de números no array cuja soma 
// seja igual ao valor alvo.
// // O programa deve ter uma complexidade de tempo eficiente.
// // Se houver múltiplas combinações possíveis, 
// o programa deve retornar True para pelo menos uma delas.


const somarSubConjuntos = (lista: number[], alvo: number) => {
  let somar: number = 0;
  for (const i of lista) {
    somar += i;
    if (somar == alvo) {
      console.log("Valor alvo antingido");
      return;
    }
  }
  console.log("alvo nao atingido");
};

somarSubConjuntos([2, 4, 6, 8], 12);

