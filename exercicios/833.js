function minMax(arr) {
  const arrayOrder = arr.sort((a, b) => a - b);
  if (arrayOrder.length === 1) {
    return [arrayOrder[ultimoIndice], arrayOrder[ultimoIndice]];
  }
  const ultimoIndice = arrayOrder.length - 1;
  return [arrayOrder[0], arrayOrder[ultimoIndice]];
};
