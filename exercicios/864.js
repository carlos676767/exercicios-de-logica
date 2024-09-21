function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];

  let countPos = 0;
  let sumNegative = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      ++countPos;
    } else if (input[i] < 0) {
      sumNegative += input[i];
    }
  }
  return [countPos, sumNegative];
}
