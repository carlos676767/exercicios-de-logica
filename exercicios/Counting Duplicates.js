function duplicateCount(text) {
  const toppuerCaseString = text.toLowerCase();

  const list = {};

  Array.from(toppuerCaseString).forEach((char) => {
    if (!list[char]) {
      list[char] = 1;
    } else {
      ++list[char];
    }
  });

  const filterNum = Object.keys(list).filter((char) => list[char] > 1);

  return filterNum.length;
}
