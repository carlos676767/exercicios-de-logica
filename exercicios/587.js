// //variaveis
// //let
// //const





// //estrutura de repetuicao

// //for //e usado percorrer uma lista
// //while //e basicamente pra quando a sabe nao quer parar um valor
// // do while // faz o loop e dps ver a condicao

// //estrutura de dados

// //array que e uma lista
// //o pilha ultimo elemento a entrar e o primeiro a sair
// // fila o primeiro elemento a ent4rave o primeiro a sair.

// let n = -2;
// const promesa = new Promise((sucess, reject) => {
//     if (n < 0) {
//         sucess("Numero menor que 0");
//     } else {
//         reject("falhou");
//     }
// });

// (async () => {
//     const fun = await promesa;
//     console.log(fun);
// })();

// console.log(Array.isArray([2]));

// const array = [1, 3, 3]
// console.log(array);

// const person = {
//     nome: 'carlos',
//     idade: 22
// }

// console.log(Object.values(person)[0]);

// const jwt = require("jsonwebtoken");
// const secret = jwt.sign({ name: "carlos2", idade: 18 }, "22222", {
//     expiresIn: "10s",
// });
// console.log(jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2FybG9zIiwiaWRhZGUiOjE4LCJpYXQiOjE3MjAwMjI2MDAsImV4cCI6MTcyMDAyMjYxMH0.s60PTdJFYOX5FHqQvZ9RbxIpfZe_SAeSCBgQvJC6Q2w"));


// console.log(array.length);

function findAverage(array) {
  if (array.length == []) return 0;
  let somar = 0;
  array.forEach((data) => {
    somar += data;
  });
  return somar / array.length;
}

console.log(findAverage([2, 3]));