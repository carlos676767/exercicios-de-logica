// Utilize a função fetchData do exercício anterior e reescreva-a utilizando a sintaxe async/await.
// Crie uma função getMultipleData que chama fetchData várias vezes de forma assíncrona e aguarde todas as
// chamadas serem concluídas antes de retornar os resultados.

console.log(4);
console.log(87);
async function httpRequest() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
console.log(87);
console.log(45);
const getMultipleData = async() => {
    await httpRequest()
    await httpRequest()
    await httpRequest()
    await httpRequest()
    await httpRequest()
    await httpRequest()
    await httpRequest()
    await httpRequest()
    await httpRequest()
    await httpRequest()
    await httpRequest()
}

getMultipleData()
console.log(12);
console.log(12);
console.log(9);
