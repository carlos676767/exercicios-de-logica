function hamming(a, b) {
  let countLetras = 0;
  if (a === b) return 0;
  const palavra1 = a.split("");
  const palavra2 = b.split("");
  for (let i = 0; i < Math.min(palavra1.length, palavra2.length); i++) {
    if (palavra1[i] != palavra2[i]) {
      ++countLetras;
    }
  }
  return countLetras;
}

module.exports = hamming
console.log(hamming("I like turtles", "I like turkeys"));
