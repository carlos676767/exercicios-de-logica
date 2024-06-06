// const readline = require("readline")()

const buscarValorUnico = (arr, callback) => {
  const unicos = new Set();
  for (let i = 0; i < arr.length; i++) {
    unicos.add(arr[i]);
  }
  callback(Array.from(unicos));
};

buscarValorUnico([4, 4, 8, 9, 25, 41, 6, 7, 3], (callback) => {
  console.log(callback);
});
