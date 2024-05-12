// Escreva uma função chamada
// divisaoSegura que recebe dois
// números como parâmetros e retorna o
// resultado da divisão do primeiro pelo
// segundo. No entanto, se ocorrer um erro
// durante a divisão (por exemplo, se o segundo
// número for zero), a função deve capturar o
//erro e retornar uma mensagem de erro adequada.
//Use o bloco try, catch e finally para lidar com a
//exceção e garantir que o código seja executado corretamente,
// independentemente do resultado.
const divisaoSegura = (n1: number, n2: number) => {
  let divisao = 0;
  try {
    divisao = n1 / n2;
    if (n2 === 0 || divisao === 0) {
      throw new Error("erro");
    }
    return divisao;
  } catch (error) {
    console.error(error);
  }
  return divisao;
};

console.log(divisaoSegura(1, 25));
