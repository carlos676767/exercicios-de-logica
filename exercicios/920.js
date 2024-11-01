function encontrarMaiorEMenor(arr){
  const order = arr.sort((a,b) => a - b)
  return [order[0], order[order.length - 1]]
}
