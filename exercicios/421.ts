const list: number[] = [4, 2, 5, 1, 3];
const indices: number[] = [];
let menor: number = list[0];

const encontrarMenores = () => {
  for (let j = 0; j < list.length; j++) {
    if (menor > list[j]) {
      menor = list[j];
      indices.push(menor);
    }
  }

  const doubleSort = () => {
    for (let i = 0; i < indices.length; ++i) {
      for (let j = 0; j < indices.length; ++j) {
        if (indices[i] < indices[j]) {
          const temp: number = indices[i];
          indices[i] = indices[j];
          indices[j] = temp;
        }
      }
    }
    console.log("O menor segundo menor numero e o", indices[1]);
  };
  doubleSort();
};

encontrarMenores();
