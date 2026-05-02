function findSingleNumber(list) {
  let num = 0;

  for (const unic of list) {
    num ^= unic;
  }

  return num;
}

console.log(findSingleNumber([1, 2, 3, 2, 1]));
