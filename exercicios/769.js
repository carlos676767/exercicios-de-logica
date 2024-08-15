var number = function (array) {
  const myArr = array;
  let contador = 0;
  const newerr = [];
  for (let i = 0; i < myArr.length; i++) {
    ++contador;
    newerr.push(contador + ": " + myArr[i]);
  }
  return newerr;
};
