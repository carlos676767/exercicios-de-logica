// Verificar se um número é par ou ímpar:

// Crie uma função que recebe um número como parâmetro e verifica se ele é par ou ímpar.
// Utilize callbacks para exibir uma mensagem indicando se o número é par ou ímpar.

const somarNumeros = (numero, callback) => {
  if (numero % 2 == 0) {
    callback("o numero e par");
  } else {
    callback("nao e ");
  }
};

somarNumeros(2, (call) => {
  console.log(call);
});
