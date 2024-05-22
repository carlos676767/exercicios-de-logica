// Filtrar uma lista de números:

// Crie uma função que recebe uma lista de números e um valor como parâmetros.
// A função deve retornar uma nova lista contendo apenas os números da lista original que são maiores que o valor especificado.
// Utilize callbacks para exibir a lista filtrada após a filtragem.

const FiltrarNumeros = (lista, valor, newlist, callback) => {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] > valor) {
      newlist.push(lista[j]);
    }
  }
  callback(newlist);
};

FiltrarNumeros([10, 2, 25, 9, 3, 44], 4, [], (call) => {
  console.log(call);
});
