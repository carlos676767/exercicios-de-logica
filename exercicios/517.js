
// Refatore a função getData do exercício anterior para retornar uma Promise em vez de usar callbacks.
// Escreva uma função fetchData que utilize a API fetch para fazer uma requisição HTTP assíncrona e retorne 
// uma Promise com os dados.

// //o event loop serve basicamente para nao bloquear 
// as operacoes nao asnyc assim monitorando as opearcoes ansyc para executar.

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
     return data
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();