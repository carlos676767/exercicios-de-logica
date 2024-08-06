function countPositivesSumNegatives(input) {
  if (input.length == []) {
    return [];
  }
  let somar = 0;
  let some2 = 0;
  const arr = [];
  for (let i = input[1]; i < input.length; i++) {
    if (input[i] < 0) {
      somar += input[i];
    } else {
      some2 += input[i];
    }
  }
  arr.push(somar, some2);
  return arr;
}
