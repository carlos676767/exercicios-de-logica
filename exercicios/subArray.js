const subArray = (arr) => {
  const subarrays = [];
  const n = arr.length;

  for (let inicio = 0; inicio < n; inicio++) {
    for (let fim = inicio; fim < n; fim++) {
      const subarray = arr.slice(inicio, fim + 1);
      subarrays.push(subarray);
    }
  }

  return Math.max(...subarrays.map((char) => char.reduce((a, b) => a + b, 0)));
};
