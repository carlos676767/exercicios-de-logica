function isIsogram(str) {
  if (!str) {
    return true;
  }
  const strArr = str.toLowerCase().split("");
  return Array.from(new Set(strArr)).length == strArr.length ? true : false;
}

console.log(isIsogram("a"));
