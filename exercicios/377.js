const array = [1, 2, 3, 4, 5, 3, 5, 5, 3];
const numerosNaoRepitidos = new Set();

for (let j = 0; j < array.length; j++) {
  if (numerosNaoRepitidos.has(array[j])) {
    console.log("numeros repitidos", array[j]);
  } else console.log(numerosNaoRepitidos.add(array[j]));
}
