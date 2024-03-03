/**
 * Sua tarefa é criar uma função que possa receber qualquer número inteiro não 
 * negativo como argumento e retorná-lo com seus dígitos em ordem decrescente.
 * Essencialmente, reorganize os dígitos para criar o número mais alto possível
 * 
 * Exemplo:
 * Entrada: 42145 Saída: 54421
 * Entrada: 145263 Saída: 654321
 * Entrada: 123456789 Saída: 987654321
 */


function descendingOrder(n) {
  if (n < 0) {
    console.log("Digite um valor positivo");
  } else {
    const valorEmArray = n.toString().split("");
    const valoresConvertidos = [];
    for (let j = 0; j < valorEmArray.length; j++) {
      valoresConvertidos.push(Number(valorEmArray[j]));
    }
    for (let i = 0; i < valoresConvertidos.length; i++) {
      for (let j = 0; j < valoresConvertidos.length; j++) {
        if (valoresConvertidos[i] > valoresConvertidos[j]) {
          const temp = valoresConvertidos[i];
          valoresConvertidos[i] = valoresConvertidos[j];
          valoresConvertidos[j] = temp;
        }
      }
    }
    return valoresConvertidos.join("");
  }
}
console.log(descendingOrder(42145));
