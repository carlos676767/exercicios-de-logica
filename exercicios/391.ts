
const numeroMenor = () => {
  const array: number[] = [7, 2, 5, 1, 9, 3];
  let menor: number = array[0];
  let menor2: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
      if (array[i] > menor2) {
        menor2 = array[i];
      }
    }
  }
  console.log(menor2);
};
numeroMenor();