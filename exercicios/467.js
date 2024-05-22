//. Inverter uma string:
// Crie uma função que recebe uma string como parâmetro e retorna a string invertida.
// Utilize callbacks para exibir a string invertida após a inversão.

//oque e um callback ? callback e basicamente quando algo estiver pronto chame de volta.

const palavra = "carlos";
function inverterString(palavra, callback) {
  callback(palavra.split("").reverse().join(""));
}

inverterString(palavra, (palavra) => {
  console.log(palavra);
});
