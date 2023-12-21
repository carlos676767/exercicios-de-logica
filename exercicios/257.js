const ordernarElementos = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
     if (array[i] < array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] =  temp
     }
    }
  }
  return array
};

let list = [10,9,8,7,6,5,4,3,2,1]
console.log(ordernarElementos(list));

let test = function () {
    return `hello word`
}

console.log(test());