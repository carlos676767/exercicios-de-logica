// Escreva uma função getData(callback) que simula uma chamada assíncrona
// para obter dados de um servidor.A função deve receber um callback que será
// chamado quando os dados estiverem disponíveis.

console.log(1);
console.log(2);
const getData = (callback) => {
  setTimeout(() => {
    callback({ nome: "pedro", idade: 25 });
  }, 5000);
};
getData((data) => {
  console.log(data);
});
// //o event loop serve basicamente para nao bloquear 
// as operacoes nao asnuc assim monitorando as opearcoes ansyc parab executar.
console.log(7);
console.log(32);