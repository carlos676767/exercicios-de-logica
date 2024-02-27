const array = [1, 2, 3, 4, 5, 3];
const array2 = [];

for (let i = 0; i < array.length; i++) {
  if (array2.includes(array[i])) {
    console.log("ha numeros repetidos", i);
    break;
  } else {
    array2.push(array[i]);
    console.log("nao ha valores repetidos", i);
  }
}

console.log(array2);
