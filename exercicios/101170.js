function hasUniqueChars(str) {
  const arr = {};

  for (let i = 0; i < str.length; i++) {
    if (arr[str[i]]) {
      return false;
    }
    arr[str[i]] = 1;
  }

  return true;
}