function disemvowel(str) {
  const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const string = str.split("");
  for (let i = 0; i < string.length; i++) {
    if (vogais.includes(string[i])) {
      string.splice([i], 1);
      --i;
    }
  }
  return string.join("");
}

console.log(disemvowel("Carlos"));
