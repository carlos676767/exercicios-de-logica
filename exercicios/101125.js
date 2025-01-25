function highAndLow(numbers) {
  const stringInArray = numbers.split(" ");
  const converterNum = stringInArray.map(Number);
  const list = converterNum.sort((a, b) => a - b);

  if (list.length === 0) {
    return "";
  }

  if (list.length === 1) {
    return `${list[0]} ${list[0]}`;
  }

  const highest = list[list.length - 1];
  const lowest = list[0];

  return `${highest} ${lowest}`;
}


