function noSpace(x) {
  const string = x;
  let value = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      value += string[i];
    }
  }
  return value;
}
