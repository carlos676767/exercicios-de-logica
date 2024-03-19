function dontGiveMeFive(start, end) {
  let contador = 0;
  for (let j = start; j <= end; j++) {
    if (!String(j).includes(5)) {
      ++contador;
    }
  }
  return contador;
}
console.log(dontGiveMeFive(4, 17));
