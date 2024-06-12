let array = [2, 2, 3, 4, 5, 5]; //cria uma array com numeros repitidos
let resultado = removaDuplicatas(); //cria uma variavel que recebe uma funcao
console.log(`os numeros antes era ${array} e agora tirados sao ${resultado}`); //mostra oos numeros duplicads e numeros tirados
function removaDuplicatas() {
  //cria uma funcao.
  let arraySem = []; //cria uma array sem nd
  for (let i = 0; i < array.length; ++i) {
    //percorre toda minha array
    if (!arraySem.includes(array[i])) {
      //fala que na minha arraysem nao tem nd da minha array
      arraySem.push(array[i]); //como nao tem puxo os numeros repitidos.
    }
  }
  return arraySem; //retorno minha arraysem
}
