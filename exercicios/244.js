const array = [10,9,8,7,6,5,4,3,2,1, 0]


function arrayOrdernadaEmCrescente(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
       if (array[i] < array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
       }
    }
  }
  return array
}

console.log(arrayOrdernada(array));

const ArrayEmOrdemDescrente = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array
};

console.log(ArrayEmOrdemDescrente(array));