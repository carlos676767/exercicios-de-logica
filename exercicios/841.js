function isIsogram(str) {
  if (!str) {
    return true;
  }
  const strArr = str.toLowerCase().split("");
  return Array.from(new Set(strArr)).length == strArr.length
}

console.log(isIsogram("a"));