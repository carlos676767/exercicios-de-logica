// Calcular a soma de dois números:

// Crie uma função que recebe dois números como parâmetros e retorna a soma dos mesmos.
// Utilize callbacks para exibir o resultado da soma após a operação.

const calcularNumeros = (n1, n2, callback) => {
  callback(n1 * n2);
};

calcularNumeros(5, 5, (call) => {
  console.log(call);
});
